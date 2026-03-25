import z from "zod";

export const editPriceSchema = z.object({
    firstHourPrice: z.number().min(5, "O nome é Obrigatorio").optional(),
    additionalHourPrice: z.number().min(5, "O nome é Obrigatorio").optional(),
    isActive: z.string().optional().transform((data) => {
        if (data === "true") {
            return true
        }
        return false
    }),
})

export type EditPriceSchema = z.infer<typeof editPriceSchema>