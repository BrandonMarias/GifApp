import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ handleFunction }) => {
    const [inputValue, setInputValue] = useState("one punch");

    const handleInputChange = ({ target }) => setInputValue(target.value);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (!inputValue.trim()) return;
        handleFunction(inputValue.trim());
        setInputValue("");
    };

    return (
        <form onSubmit={handleOnSubmit} aria-label="form">
            <input
                type="text"
                placeholder="Bucar Gifs"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    handleFunction: PropTypes.func.isRequired,
};
