import { useState } from "react";
import {GifGrid,AddCategory} from "./components";

export const GifApp = () => {
    const [categories, setCategories] = useState([]);

    const handleAddCategory = (newCategory = "") => {
        newCategory = newCategory.toLocaleLowerCase();
        if (categories.includes(newCategory)) return;
        setCategories((cat) => [newCategory, ...cat]);
    };

    return (
        <>
            <h1>Gif App</h1>
            <AddCategory handleFunction={handleAddCategory} />

            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};
