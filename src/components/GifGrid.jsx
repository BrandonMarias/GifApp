
import { useFetchGifs } from "../hooks/useFetchGifs";
import {GifCard} from "./";



export const GifGrid = ({ category }) => {
    
    const [gifs, isLoading] = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>
            {isLoading && <h2>Is loading...</h2>}
            <div className="card-grid">
                {gifs.map(({ id, title, img }) => (
                    <GifCard key={id} title={title} img={img} />
                ))}
            </div>
        </>
    );
};

