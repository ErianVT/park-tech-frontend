import z from "zod";

export const registerSchema = z.object({
    name: z.string().min(3, "O nome deve conter pelo menos 3 caracteres"),
    email: z.email("Insira um email válido"),
    password: z.string().min(6, "A senha deve conter pelo menos 6 caracteres"),
})

export type RegisterSchema = z.infer<typeof registerSchema>;