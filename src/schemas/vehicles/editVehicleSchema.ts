import z from "zod";


export const editVehicleSchema = z.object({
    plate: z.string().min(3, "A Placa deve ter no mínimo 3 caracteres").transform((data) => data.toUpperCase()).optional(),
    model: z.string().min(3, "O Modelo deve ter no mínimo 3 caracteres").optional(),
    color: z.string().min(3, "A cor deve ter no mínimo 3 caracteres").optional(),
})

export type EditVehicleSchema = z.infer<typeof editVehicleSchema>