import { useState, useEffect } from "react";



export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isloading, setIsloading] = useState(true);
    const [error, seterror] = useState(null)

    const getData= async () => {
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            setData(data);
            setIsloading(false)
        } catch (error) {
            seterror(error)
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return [data, isloading, error];
};
