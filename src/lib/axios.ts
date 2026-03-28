import axios from "axios";

const baseURL = "https://park-tech-backend.cnyzce.easypanel.host"

export const api = axios.create({
    baseURL: baseURL
})

api.interceptors.request.use((config) => {
    const localStorage = window.localStorage;
    const token = localStorage.getItem("@park_tech:token");

    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }


    return config
})
