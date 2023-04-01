import { z } from "zod";

export const WithSearchSchema = z.object({
    searchQuery: z.string().optional()
})