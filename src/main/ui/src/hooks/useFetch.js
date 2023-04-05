import {useCallback, useEffect, useState} from "react";
import axios from "axios";

function useFetch(url) {
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [options, setOptions] = useState({})

    const doFetch = useCallback((options = {}) => {
        setOptions(options);
        setIsLoading(true);
    }, []);

    useEffect(() => {
        if(!isLoading) {
            return
        }
        async function fetchData() {
            try {
                let response = await axios(url, options)
                setResponse(response.data)
            }catch (err) {
                let errData = err.response ? err.response.data : "Server Error";
                setError(errData)
            }
            setIsLoading(false);
        };
        fetchData()
    }, [isLoading, options, url])

    return [{response, error, isLoading}, doFetch]
}

export default useFetch;