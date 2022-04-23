import { useState } from "react";
import { Beers } from "../types/Beers";
import { useApi } from "./useApi";

export const useBeer = (limit: number) => {
    const punk = useApi()
    const [beers, setBeers] = useState<Beers[]>([]);

    const fetchBeer = async (page: number) => {
       const list = await punk.getBeers(page, limit)
       setBeers(list)
    };
    return {
        fetchBeer,
        beers
    };
};


