
import { ServerErrorHandler } from './../../error-handler/ServerErrorHandler';
import { CreateCompanyEnquiry, DeleteCompanyEnquiry, UpdateCompanyEnquiry, GetEnquiry, ListCompanyEnquiry, InfiniteListCompanyEnquiry } from '@/schema/CompanyEnquiry';
import { publicProcedure, protectedProcedure } from './../trpc';
import { createTRPCRouter } from "../trpc";
import { createPaginator } from 'prisma-pagination';
import { type CompanyEnquiry, type Prisma } from '@prisma/client';
import { createInfinitePaginator } from '~/lib/prismaInfinitePagination';

const paginate = createPaginator({perPage: 100})
const infinitePaginate = createInfinitePaginator({limit: 20});

export const CompanyEnquiryRouter = createTRPCRouter({
    create: publicProcedure.input(CreateCompanyEnquiry).mutation(async ({ctx, input}) => {
        try {
            const alreadyCreated = await ctx.prisma.companyEnquiry.findFirst({
                where: {email: input.email, type: input.type}
            });

            if(alreadyCreated) {
                return alreadyCreated;
            }

            const res = await ctx.prisma.companyEnquiry.create({
                data: input
            })

            return res;
        } catch (error) {
            ServerErrorHandler(error);
        }
    }),

    update: protectedProcedure.input(UpdateCompanyEnquiry).mutation(async ({ctx, input}) => {
        const {id, ...rest} = input;

        try {
            const res = await ctx.prisma.companyEnquiry.update({
                where: {id},
                data: {...rest}
            });
            return res;
        } catch (error) {
            ServerErrorHandler(error);
        }
    }),

    delete: protectedProcedure.input(DeleteCompanyEnquiry).mutation(async ({ctx, input}) => {
        const {id} = input;

        try {
            const res = await ctx.prisma.companyEnquiry.delete({
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
            const res = await ctx.prisma.companyEnquiry.findFirst({
                where: {id},
            });
            return res;
        } catch (error) {
            ServerErrorHandler(error)
        }
    }),

    list: protectedProcedure.input(ListCompanyEnquiry).query(async ({ctx, input}) => {
        const {filter, sort} = input;
        try {
            const res = await paginate<CompanyEnquiry, Prisma.CompanyEnquiryFindManyArgs>(ctx.prisma.companyEnquiry, {
                where: {
                    ...filter
                },
                orderBy: input.sort ? {[input.sort.sortBy]: input.sort.sortOrder} : {createdAt: 'asc'}
            }, input.paginate);

            return res;
        } catch (error) {
            ServerErrorHandler(error)
        }
    }),
    infiniteList: protectedProcedure.input(InfiniteListCompanyEnquiry).query(async ({ctx, input}) => {
        const {filter, sort} = input;
        try {
            const res = await infinitePaginate<CompanyEnquiry, Prisma.CompanyEnquiryFindManyArgs>(ctx.prisma.companyEnquiry, {
                where: {
                    ...filter
                },
                orderBy: input.sort ? {[input.sort.sortBy]: input.sort.sortOrder} : {createdAt: 'asc'}
            }, input.paginate);

            return res;
        } catch (error) {
            ServerErrorHandler(error)
        }
    }),

    count: protectedProcedure.query(async ({ctx}) => {
        return await ctx.prisma.companyEnquiry.count()
    })

})