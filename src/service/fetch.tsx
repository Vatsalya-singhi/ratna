import { useEffect, useState } from "react";

import * as Axios from 'axios';

const axios: Axios.AxiosStatic = Axios.default;


export const useFetch = (url: string) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        const abortController = new AbortController();
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((res) => {
                if (!res.ok) {
                    throw Error('could not fetch data for that resource');
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setError(null);
            })
            .catch((err) => {
                if (err.message === "AbortError") {
                    console.log('fetch aborted');
                    return;
                }
                setData(null);
                setError(err.message);
            })
            .finally(() => {
                setIsLoading(false);
            })

        return () => abortController.abort();

    }, [url])

    return { data, isLoading, error };
}


export const getAxios = (url: string): Promise<any> => {
    return axios.get(url);
}

export const postAxios = (url: string, payload: any): Promise<any> => {
    return axios.post(url, payload);
}

export const putAxios = (url: string, payload: any): Promise<any> => {
    return axios.put(url, payload);
}

export const deleteAxios = (url: string): Promise<any> => {
    return axios.delete(url);
}



