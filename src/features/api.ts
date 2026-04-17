import { http } from "./http";

export const getExample = async () => {
    const res = await http.get("/example");
    return res.data;
};