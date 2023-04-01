import { z } from "zod";

export const ApplicationStatusEnumSchema = z.enum(['ACCEPTED', 'PENDING', 'DECLINED']);

export type ApplicationStatusEnum = z.TypeOf<typeof ApplicationStatusEnumSchema>;
export const CreateApplicationSchema = z.object({
    jobSeekerId: z.string(),
    jobId: z.string(),
})


export const UpdateApplicationSchema = z.object({
    id: z.string(),
    status: ApplicationStatusEnumSchema
})
