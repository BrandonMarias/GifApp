export const getGifs = async (url) => {
    const resp = await fetch(url);
    const { data = [] } = await resp.json();

    const gifs = data.map(({ id, title, images }) => ({
        id,
        title,
        img: images.downsized_medium.url,
    }));

    return gifs;
};
