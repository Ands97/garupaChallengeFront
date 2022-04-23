import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import qs from 'query-string';

export const usePagination = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const getCurrentPage = () => {
        const queryParams = qs.parse(location.search)
        const page = queryParams.page
        return page ? Number(page) : undefined
    }

    const [currentPage, setCurrentPage] = useState(getCurrentPage() || 1)

    useEffect(()=>{
        const queryParams = qs.parse(location.search) 
        navigate({
            search: qs.stringify({
                ...queryParams,
                page: currentPage
            })
        })
    }, [currentPage])
    
    return{
        setCurrentPage,
        currentPage
    }
}