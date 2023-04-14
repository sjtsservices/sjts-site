import { z } from "zod";

export const UpdateRates = z.object({
    base: z.string(),
    rates: z.array(z.object({
        code: z.string(),
        rates: z.string()
    }))
})

export const List = z.object({
    select: z.object({
        name: z.boolean().optional(),
        alpha2: z.boolean().optional(),
        alpha3: z.boolean().optional(),
        curCode: z.boolean().optional(),
        base: z.boolean().optional(),
        rate: z.boolean().optional(),
        curSymbol: z.boolean().optional(),
    }).optional()
});

export const Get = z.object({
    alpha2: z.string().optional(),
    alpha3: z.string().optional()
})