import { GetApplicatioSchema, ListApplicationSchema,UpdateApplicationSchema } from '@/schema/Applications.schema';
import { ServerConfig } from './../../config';
import { ServerErrorHandler } from './../../error-handler/ServerErrorHandler';
import { protectedProcedure } from './../trpc';
import { createTRPCRouter } from "../trpc";
import { createPaginator } from 'prisma-pagination';
import { JobSeeker, type Applications, type Job, type Prisma } from '@prisma/client';
import { DeleteApplicationSchema } from '@/schema/Applications.schema';

const paginate = createPaginator({perPage: ServerConfig.pageLimit})

export const ApplicationRouter = createTRPCRouter({
   
    update: protectedProcedure.input(UpdateApplicationSchema).mutation(async ({ctx, input}) => {
        const {id, ...rest} = input;

        try {
            const res = await ctx.prisma.applications.update({
                where: {id},
                data: {...rest}
            });
            return res;
        } catch (error) {
            ServerErrorHandler(error);
        }
    }),

    delete: protectedProcedure.input(DeleteApplicationSchema).mutation(async ({ctx, input}) => {
        const {id} = input;

        try {
            const res = await ctx.prisma.applications.delete({
                where: {id}
            });
            return res;
        } catch (error) {
            ServerErrorHandler(error)
        }
    }),

    single: protectedProcedure.input(GetApplicatioSchema).query(async ({ctx, input}) => {
        const {id} = input;
        try {
            const res = await ctx.prisma.applications.findFirst({
                where: {id},
                include: {
                    jobSeeker: true,
                    job: true,
                 }
            });
            return res;
        } catch (error) {
            ServerErrorHandler(error)
        }
    }),

    list: protectedProcedure.input(ListApplicationSchema).query(async ({ctx, input}) => {
        try {
            const res = await paginate<Applications& {
                jobSeeker: JobSeeker,
                job: Job
            }, Prisma.ApplicationsFindManyArgs>(ctx.prisma.applications, {
                include: {
                  jobSeeker: true,
                  job: true
                }
            }, input.paginate);

            return res;
        } catch (error) {
            ServerErrorHandler(error)
        }
    }),
})