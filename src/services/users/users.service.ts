import { api } from "@/lib/axios";

export async function getUsers() {

    const { data } = await api.get("/users");
    console.log({ data })
    return data
}

interface CreateUserPayload {
    name: string;
    email: string;
    password: string
}

export async function createUser(payload: CreateUserPayload) {
    return api.post("/user", payload)
}