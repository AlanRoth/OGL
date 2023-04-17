import {useCallback, useEffect, useState} from "react";
import axios from "axios";

function useFetch(url) {
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const doFetch = useCallback((options = {}) => {
        setIsLoading(true);
    }, []);

    useEffect(() => {
        if(!isLoading) {
            return
        }
        async function fetchData() {
            try {
                let response = await axios.get(url, {
                    headers: {
                        'Content-Type':'multipart/form-data',
                        'Cache-Control':'no-cache',
                        'Access-Control-Allow-Origin':'*'
                    }, withCredentials: false
                })
                setResponse(response.data)
            }catch (err) {
                console.log(err);
                let errData = err.response ? err.response.data : "Server Error";
                setError(errData)
            }
            setIsLoading(false);
        };
        fetchData()
    }, [isLoading, url])

    return [{response, error, isLoading}, doFetch]
}

export default useFetch;