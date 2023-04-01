import { WithSorting } from './schema-helpers/WithSortingSchema';
import { WithPagination } from './schema-helpers/WithPagination';
import { z } from "zod";

export const CreateEnquiry = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    message: z.string(),
    service: z.string(),
})

export const UpdateEnquiry = z.object({
    id: z.string()
}).merge(CreateEnquiry);

export const DeleteEnquiry = z.object({
    id: z.string()
})
export const GetEnquiry = z.object({
    id: z.string()
})

export const ListEnquiry = WithPagination.merge(WithSorting)