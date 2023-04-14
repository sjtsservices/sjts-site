import { z } from "zod";

export const CreateSetting = z.object({
    email: z.string(),
    phone: z.string(),
    city: z.string().optional(),
    state: z.string().optional(),
    country: z.string().optional(),
    address: z.string().optional(),
    baseCur: z.string().optional(),
    socialLinks: z.array(z.any()).default([]).optional(),
    extra: z.any().optional()
})

export const UpdateSetting = z.object({
    id: z.string()
}).merge(CreateSetting);

