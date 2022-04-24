import axios from "axios";

const api = axios.create({
    baseURL: "http://54.232.200.77:4000/api",
});

const punk = axios.create({
    baseURL: "https://api.punkapi.com/v2/beers",
});

export const useApi = () => ({
    signin: async (email: string, password: string) => {
        const response = await api.post("/login", { email, password });
        return response.data;
    },
    validateToken: async (token: string) => {
        const response = await api.post("validateToken", { token });
        return response.data;
    },
    getBeers: async (currentPage: number, limit: number) => {
        const response = await punk.get(`?page=${currentPage}&per_page=${limit}`);
        return response.data;
    },
    getBeerId: async (id: string) => {
        const response = await punk.get(`/${id}`);
        return response.data;
    },
});
