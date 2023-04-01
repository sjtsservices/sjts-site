
import { ServerErrorHandler } from './../../error-handler/ServerErrorHandler';
import { CreateEnquiry, DeleteEnquiry, UpdateEnquiry, GetEnquiry, ListEnquiry } from '@/schema/Enquiry.schema';
import { publicProcedure, protectedProcedure } from './../trpc';
import { createTRPCRouter } from "../trpc";
import { createPaginator } from 'prisma-pagination';
import { type Enquiry, type Prisma } from '@prisma/client';

const paginate = createPaginator({perPage: 100})

export const EnquiryRouter = createTRPCRouter({
    create: publicProcedure.input(CreateEnquiry).mutation(async ({ctx, input}) => {
        try {
            const alreadyCreated = await ctx.prisma.enquiry.findFirst({
                where: {email: input.email}
            });

            if(alreadyCreated) {
                return alreadyCreated;
            }

            const res = await ctx.prisma.enquiry.create({
                data: input
            })

            return res;
        } catch (error) {
            ServerErrorHandler(error);
        }
    }),

    update: protectedProcedure.input(UpdateEnquiry).mutation(async ({ctx, input}) => {
        const {id, ...rest} = input;

        try {
            const res = await ctx.prisma.enquiry.update({
                where: {id},
                data: {...rest}
            });
            return res;
        } catch (error) {
            ServerErrorHandler(error);
        }
    }),

    delete: protectedProcedure.input(DeleteEnquiry).mutation(async ({ctx, input}) => {
        const {id} = input;

        try {
            const res = await ctx.prisma.enquiry.delete({
                where: {id}
            });
            return res;
        } catch (error) {
            ServerErrorHandler(error)
        }
    }),

    single: protectedProcedure.input(GetEnquiry).query(async ({ctx, input}) => {
        const {id} = input;
        try {
            const res = await ctx.prisma.enquiry.findFirst({
                where: {id},
            });
            return res;
        } catch (error) {
            ServerErrorHandler(error)
        }
    }),

    list: protectedProcedure.input(ListEnquiry).query(async ({ctx, input}) => {
        try {
            const res = await paginate<Enquiry, Prisma.EnquiryFindManyArgs>(ctx.prisma.enquiry, {
                
            }, input.paginate);

            return res;
        } catch (error) {
            ServerErrorHandler(error)
        }
    }),

})