import z from "zod";

export const createPriceSchema = z.object({
    firstHourPrice: z.number().min(5, "O nome é Obrigatorio"),
    additionalHourPrice: z.number().min(5, "O nome é Obrigatorio"),
})

export type CreatePriceSchema = z.infer<typeof createPriceSchema>