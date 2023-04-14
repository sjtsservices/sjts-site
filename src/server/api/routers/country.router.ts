import { UpdateRates, List, Get } from "@/schema/CountriesSchema";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { ServerErrorHandler } from "@/server/error-handler/ServerErrorHandler";


export const CountryRouter = createTRPCRouter({
  
    update: protectedProcedure.input(UpdateRates).mutation(async ({ctx, input}) => {
        const updatation = input.rates.map(_rate => {
            return ctx.prisma.country.updateMany({
                where: {
                    curCode: _rate.code,
                },
                data: {
                    base: input.base,
                    rate: _rate.rates
                }
            })
        })
        try {
            const res = await ctx.prisma.$transaction(updatation);
            return res;
        } catch (error) {
            ServerErrorHandler(error);
        }
    }),


    list: publicProcedure.input(List).query(async({ctx, input}) => {
        try {
            const res = await ctx.prisma.country.findMany();
            return res;
        } catch (error) {
            ServerErrorHandler(error);
        }
    }),

    get: publicProcedure.input(Get).query(async ({ctx, input}) => {
        const {alpha2, alpha3} = input;
        try {
            const res = await ctx.prisma.country.findFirst({
                where: {
                    alpha2,
                    alpha3
                }
            });
            return res;
        } catch (error) {
            ServerErrorHandler(error);
        }
    }),
    listCurrency: publicProcedure.query(async ({ctx, input}) => {
        try {
            const res = await ctx.prisma.country.findMany({
                select: {
                    name: true,
                    curCode: true,
                    curSymbol: true,
                    rate: true
                },
                distinct:['curCode']
            });
            return res;
        } catch (error) {
            ServerErrorHandler(error);
        }
    }),


})
