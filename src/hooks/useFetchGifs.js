import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

const apiKey = "vDyfhWXzGZUESWoYIsyGdtugZ6t69rDi";

export const useFetchGifs = (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=5`;
    const [gifs, setgifs] = useState([]);
    const [isloading, setIsloading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(url);
        setgifs(newImages);
        setIsloading(false);
    };

    useEffect(() => {
        getImages();
    }, []);

    return [gifs, isloading];
};
