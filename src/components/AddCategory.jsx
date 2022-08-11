import { useState } from "react";

export const AddCategory = ({ handleFunction }) => {
    const [inputValue, setInputValue] = useState("one punch");

    const handleInputChange = ({ target }) => setInputValue(target.value);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() < 1) return;
        handleFunction(inputValue.trim());
        setInputValue("");
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <input
                type="text"
                placeholder="Bucar Gifs"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};
