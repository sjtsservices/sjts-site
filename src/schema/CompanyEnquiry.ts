import { WithSorting } from './schema-helpers/WithSortingSchema';
import { WithPagination } from './schema-helpers/WithPagination';
import { z } from "zod";
import { WithInfinitePagination } from './schema-helpers/WithInfinitePaginaion';

const CompanyEnquiryTypeEnum = z.enum(['GENERAL','MANAGMENT','HR','DEVELOPMENT','DESIGN']);


export const CompanyEnquiryFilterSchema = z.object({
    type: CompanyEnquiryTypeEnum.optional(),
})

export const CreateCompanyEnquiry = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    message: z.string(),
    data: z.any(),
    type: CompanyEnquiryTypeEnum.default('GENERAL')
})

export const UpdateCompanyEnquiry = z.object({
    id: z.string()
}).merge (CreateCompanyEnquiry);

export const DeleteCompanyEnquiry = z.object({
    id: z.string()
})
export const GetEnquiry = z.object({
    id: z.string()
})

export const ListCompanyEnquiry = WithPagination
                                    .merge(WithSorting)
                                    .merge(z.object({
                                        filter: CompanyEnquiryFilterSchema.optional()
                                    }))
export const InfiniteListCompanyEnquiry = WithInfinitePagination
                                            .merge(WithSorting)
                                            .merge(z.object({
                                                filter: CompanyEnquiryFilterSchema
                                            }))