import { ServerConfig } from "@/server/config";
import { z } from "zod";

export const WithInfinitePagination = z.object({
    paginate: z.object({
        cursor: z.object({
            id: z.string().optional()
        }).optional(),
        limit:  z.number().default(ServerConfig.pageLimit),
    })
})