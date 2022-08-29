import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("test on <AddCategory/>", () => {
    test("should change the input value", () => {
        render(<AddCategory handleFunction={() => {}} />);
        const input = screen.getByRole("textbox");
        fireEvent.input(input, { target: { value: "one punch" } });
        // screen.debug();
        expect(input.value).toBe("one punch");
    });

    test("should call the handleFunction when the form is submitted if the input has a value", () => {
        const inputValue = "one punch";
        const handleFunction = jest.fn();
        render(<AddCategory handleFunction={handleFunction} />);
        const form = screen.getByRole("form");
        const input = screen.getByRole("textbox");

        fireEvent.submit(form);
        // screen.debug();
        expect(input.value).toBe("");
        expect(handleFunction).toHaveBeenCalledWith(inputValue);
    });

    test("should not call the handleFunction when the form is submitted if the input has no value", () => {
        const handleFunction = jest.fn();

        render(<AddCategory handleFunction={handleFunction} />);
        const form = screen.getByRole("form");
        const input = screen.getByRole("textbox");
        fireEvent.input(input, { target: { value: "" } });
        fireEvent.submit(form);
        expect(handleFunction).not.toHaveBeenCalled();
    });
});

