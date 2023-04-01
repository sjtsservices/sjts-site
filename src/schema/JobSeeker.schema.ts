import { WithPagination } from './schema-helpers/WithPagination';
import { z } from "zod";
import { WithSorting } from './schema-helpers/WithSortingSchema';
import { WithSearchSchema } from './schema-helpers/WithSearch';
export const JobSeekerCategory = z.enum(['PREMIUM', 'GENERAL'])
export const CreateJobSeekerSchema = z.object({
    name: z.string(),
    image_url: z.string().optional(),
    phone: z.string(),
    email: z.string().email(),
    state: z.string(),
    country: z.string(),
    city: z.string(),
    cvUrl: z.string(),
    address: z.string(),
    category: JobSeekerCategory,
    description: z.string().optional(),
    jobId: z.string()
});


export type CreateJobSeekerInput = z.TypeOf<typeof CreateJobSeekerSchema>;


export const UpdateJobSeekerSchema = z.object({
    id: z.string()
}).merge(CreateJobSeekerSchema);

export type UpdateJobSeekerInput = z.TypeOf<typeof UpdateJobSeekerSchema>;


export const DeleteJobSeekerSchema = z.object({
    id: z.string()
});
export type DeleteJobSeekerInput = z.TypeOf<typeof DeleteJobSeekerSchema>;

export const GetJobSeekerSchema = z.object({
    id: z.string()
})

export type GetJobSeekerInput = z.TypeOf<typeof GetJobSeekerSchema>;

export const ListJobSeekerSchema = WithPagination
                                    .merge(WithSorting)
                                    .merge(WithSearchSchema)