import { ServerConfig } from './../../config';
import { ServerErrorHandler } from './../../error-handler/ServerErrorHandler';
import { CreateJobSchema, DeleteJobSchema, GetJobSchema, UpdateJobSchema, ListJobSchema } from '@/schema/Job.schema';
import { publicProcedure, protectedProcedure } from './../trpc';
import { createTRPCRouter } from "../trpc";
import { createPaginator } from 'prisma-pagination';
import { type Job, type Prisma } from '@prisma/client';

const paginate = createPaginator({perPage: ServerConfig.pageLimit})

export const JobRouter = createTRPCRouter({
    create: publicProcedure.input(CreateJobSchema).mutation(async ({ctx, input}) => {
    
        try {
            const res = await ctx.prisma.job.create({
                data: {...input}
            });
            return res;
        } catch (error) {
            ServerErrorHandler(error);
        }
    }),

    update: protectedProcedure.input(UpdateJobSchema).mutation(async ({ctx, input}) => {
        const {id, ...rest} = input;

        try {
            const res = await ctx.prisma.job.update({
                where: {id},
                data: {...rest}
            });
            return res;
        } catch (error) {
            ServerErrorHandler(error);
        }
    }),

    delete: protectedProcedure.input(DeleteJobSchema).mutation(async ({ctx, input}) => {
        const {id} = input;

        try {
            const res = await ctx.prisma.job.delete({
                where: {id}
            });
            return res;
        } catch (error) {
            ServerErrorHandler(error)
        }
    }),

    single: protectedProcedure.input(GetJobSchema).query(async ({ctx, input}) => {
        const {id} = input;
        try {
            const res = await ctx.prisma.job.findFirst({
                where: {id},
                include: {
                    applications: true,
                    _count: {
                     select: {
                        applications: true
                     }
                    }
                 }
            });
            return res;
        } catch (error) {
            ServerErrorHandler(error)
        }
    }),

    list: publicProcedure.input(ListJobSchema).query(async ({ctx, input}) => {
        try {
            const res = await paginate<Job& {
                _count: {
                    applications: number;
                };
            }, Prisma.JobFindManyArgs>(ctx.prisma.job, {
            
                orderBy: input.sort ? {[input.sort.sortBy]: input.sort.sortOrder} : {createdAt: 'desc'},
                include: {
                   _count: {
                    select: {
                        applications: true
                    }
                   }
                }
            }, input.paginate);

            return res;
        } catch (error) {
            ServerErrorHandler(error)
        }
    }),
})