import { z } from "zod";

export const SortSchema = z.object({
    sortBy: z.string(),
    sortOrder: z.enum(['asc', 'desc'])
});

export type SortingInput = z.TypeOf<typeof SortSchema>;

export const WithSorting = z.object({
    sort: SortSchema.optional()
});