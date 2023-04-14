import { WithPagination } from './schema-helpers/WithPagination';
import { z } from "zod";
import { WithSorting } from './schema-helpers/WithSortingSchema';
import { WithSearchSchema } from './schema-helpers/WithSearch';
import { Applications, Job, JobSeeker } from '@prisma/client';

export const JobSeekerCategory = z.enum(['PREMIUM', 'GENERAL'])
export const JobTypeEnum = z.enum(['FULL_TIME', 'PART_TIME', 'FREELANCE']);
export const SalaryRateEnum = z.enum(['HOUR', 'MONTH', 'YEAR']);
export const SkillLevelEnum = z.enum(['BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'EXPERT']);

export const SkillObj = z.object({
    skill: z.string(),
})


export const CreateJobSchema = z.object({
    title: z.string(),
    thumbnail: z.string().optional().nullable(),
    desc: z.string().optional().nullable(),
    summary: z.string().optional().nullable(),
    skills: z.array(SkillObj).default([]),
    expiredAt: z.date().optional().nullable(),
    start_salary: z.number().optional().nullable(),
    max_salary: z.number().optional().nullable(),
    experience: z.number().default(0).optional(),
    rate: SalaryRateEnum,
    type: JobTypeEnum,
    jobCountry: z.string(),
    jobState: z.string(),
    jobCity: z.string().optional(),
    published: z.boolean().optional().default(false)
});


export type CreateJobInput = z.TypeOf<typeof CreateJobSchema>;


export const UpdateJobSchema = z.object({
    id: z.string()
}).merge(CreateJobSchema);

export type UpdateJobInput = z.TypeOf<typeof UpdateJobSchema>;


export const DeleteJobSchema = z.object({
    id: z.string()
});
export type DeleteJobInput = z.TypeOf<typeof DeleteJobSchema>;

export const GetJobSchema = z.object({
    id: z.string()
})
export type GetJobInput = z.TypeOf<typeof GetJobSchema>;

export const ListJobSchema = WithPagination
                                    .merge(WithSorting)
                                    .merge(WithSearchSchema);
export type JobListItem = Job& {
    _count: {
        applications: number;
    };
}

export type SingleJob = Job & {
    applications: Applications & {
        jobSeeker: JobSeeker
    },
    _count: {
        applications: number
    }
}