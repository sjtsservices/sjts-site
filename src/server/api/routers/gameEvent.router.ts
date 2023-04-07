
import { ServerErrorHandler } from './../../error-handler/ServerErrorHandler';
import { CreateGameEventSchema, DeleteGameEvent, UpdateGameEvent, GetGameEvent, ListGameEvent, type GameEventType } from '@/schema/GameEvent.schema';
import { publicProcedure, protectedProcedure } from './../trpc';
import { createTRPCRouter } from "../trpc";
import { createPaginator } from 'prisma-pagination';
import { type Prisma } from '@prisma/client';
// import { createInfinitePaginator } from '~/lib/prismaInfinitePagination';

const paginate = createPaginator({perPage: 100})
// const infinitePaginate = createInfinitePaginator({limit: 20});

export const GameEventRouter = createTRPCRouter({
    create: publicProcedure.input(CreateGameEventSchema).mutation(async ({ctx, input}) => {
        try {
            
            const res = await ctx.prisma.gameEvent.create({
                data: input,
                include: {
                    Game: true
                }
            })

            return res;
        } catch (error) {
            ServerErrorHandler(error);
        }
    }),

    update: protectedProcedure.input(UpdateGameEvent).mutation(async ({ctx, input}) => {
        const {id, ...rest} = input;

        try {
            const res = await ctx.prisma.gameEvent.update({
                where: {id},
                data: {...rest},
                include: {
                    Game: true
                }
            });
            return res;
        } catch (error) {
            ServerErrorHandler(error);
        }
    }),

    delete: protectedProcedure.input(DeleteGameEvent).mutation(async ({ctx, input}) => {
        const {id} = input;

        try {
            const res = await ctx.prisma.gameEvent.delete({
                where: {id},
                include: {
                    Game: true
                }
            });
            return res;
        } catch (error) {
            ServerErrorHandler(error)
        }
    }),

    single: protectedProcedure.input(GetGameEvent).query(async ({ctx, input}) => {
        const {id} = input;
        try {
            const res = await ctx.prisma.gameEvent.findFirst({
                where: {id},
                include: {
                    Game: true
                }
            });
            return res;
        } catch (error) {
            ServerErrorHandler(error)
        }
    }),

    list: protectedProcedure.input(ListGameEvent).query(async ({ctx, input}) => {
        const {filter: {type}} = input;
        try {
            const res = await paginate<GameEventType, Prisma.GameEventFindManyArgs>(ctx.prisma.gameEvent, {
                where: {
                    expiredAt: type === 'ONLY_OPENED'? {gt: new Date()} : undefined
                },
                orderBy: input.sort ? {[input.sort.sortBy]: input.sort.sortOrder} : {createdAt: 'asc'},
                include: {
                    Game: true
                }
            }, input.paginate);

            return res;
        } catch (error) {
            ServerErrorHandler(error)
        }
    }),
    

})