import z from "zod";


export const createVehicleSchema = z.object({
    plate: z.string().min(3, "A Placa deve ter no mínimo 3 caracteres").transform((data) => data.toUpperCase()),
    model: z.string().min(3, "O Modelo deve ter no mínimo 3 caracteres"),
    color: z.string().min(3, "A cor deve ter no mínimo 3 caracteres"),
})

export type CreateVehicleSchema = z.infer<typeof createVehicleSchema>