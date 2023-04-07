import { type Game, type GameEvent } from "@prisma/client";
import { z } from "zod";
import { WithPagination } from "./schema-helpers/WithPagination";
import { WithSorting } from "./schema-helpers/WithSortingSchema";

export type GameEventType = GameEvent & {
    Game: Game|null
}

export const EventType = z.enum(['ALL', 'ONLY_OPENED']);
export type EventTypeEnum = z.TypeOf<typeof EventType>;


export const CreateGameEventSchema = z.object({
    title: z.string(),
    link: z.string(),
    expiredAt: z.date(),
    thumbnail: z.string().optional(),
    prize: z.number().default(0),
    currencyCode: z.string().optional(),
    gameId: z.string().optional()
})

export const UpdateGameEvent = z.object({
    id: z.string()
}).merge(CreateGameEventSchema);

export const GetGameEvent = z.object({
    id: z.string()
});
export const DeleteGameEvent = z.object({
    id: z.string()
});

export const ListGameEvent = WithPagination
                .merge(WithSorting)
                .merge(z.object({
                    filter: z.object({
                        type: EventType
                    })
                }))