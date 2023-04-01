import { z } from "zod";

export const PaginateByPageSchma = z.object({
    page: z.number().or(z.string()).optional(),
    pageLimit: z.number().or(z.string()).optional()
})

export const WithPagination = z.object({
    paginate: PaginateByPageSchma.optional()
});