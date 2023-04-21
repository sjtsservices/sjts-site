import { CreateSetting, UpdateSetting } from "@/schema/Setting.schema";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { ServerErrorHandler } from "@/server/error-handler/ServerErrorHandler";


export const SettingRouter = createTRPCRouter({
    create: protectedProcedure.input(CreateSetting).mutation(async ({ctx, input}) => {
        try {
            await ctx.prisma.siteConfig.deleteMany()
            const res = await ctx.prisma.siteConfig.create({
                data: input
            });
            return res;
        } catch (error) {
            ServerErrorHandler(error);
        }
    }),
    update: protectedProcedure.input(UpdateSetting).mutation(async ({ctx, input}) => {
        const {id, ...rest} = input;
        try {
            const res = await ctx.prisma.siteConfig.update({
                where: {id},
                data: rest
            });
            return res;
        } catch (error) {
            ServerErrorHandler(error);
        }
    }),
    get: publicProcedure.query(async ({ctx, input}) => {
        try {
            const res = await ctx.prisma.siteConfig.findFirst();
            return res;
        } catch (error) {
            ServerErrorHandler(error);
        }
    })
})
