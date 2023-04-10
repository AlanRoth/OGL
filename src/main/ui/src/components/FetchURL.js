import useFetch from "../hooks/useFetch";
import {useEffect} from "react";

function FetchURL(url) {
    let products = []
    const [{response, error, isLoading}, doFetch] = useFetch(url);
    useEffect(() => {
        doFetch()
    }, [])

    if(!response || error) {
        return []
    }

    return(response)
}

export default FetchURL;