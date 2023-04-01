import { WithPagination } from './schema-helpers/WithPagination';
import { z } from "zod";
import { WithSorting } from './schema-helpers/WithSortingSchema';
import { WithSearchSchema } from './schema-helpers/WithSearch';
import { Applications, Job, JobSeeker } from '@prisma/client';

export const ApplicationStatusEnum = z.enum([
    'ACCEPTED',
    'PENDING',
    'DECLINED'
]);

export type ApplicationStatus = z.TypeOf<typeof ApplicationStatusEnum>;


export const UpdateApplicationSchema = z.object({
    id: z.string(),
    status: ApplicationStatusEnum
});

export type UpdateApplicationInput = z.TypeOf<typeof UpdateApplicationSchema>;


export const DeleteApplicationSchema = z.object({
    id: z.string()
});
export type DeleteJobInput = z.TypeOf<typeof DeleteApplicationSchema>;

export const GetApplicatioSchema = z.object({
    id: z.string()
})
export type GetJobInput = z.TypeOf<typeof GetApplicatioSchema>;

export const ListApplicationSchema = WithPagination
                                    .merge(WithSorting)
                                    .merge(WithSearchSchema)
                                    .merge(z.object({
                                        jobId: z.string()
                                    }));
export type ApplicationListItem = Applications& {
    jobSeeker: JobSeeker;
    job: Job
}

