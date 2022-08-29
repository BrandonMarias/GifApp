import { GifApp } from "../src/GifApp";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";

describe("test on <GifApp/>", () => {
    test("should render correctly", () => {
        const { container } = render(<GifApp />);
        expect(container).toMatchSnapshot();
    });

    test("should add a new category", async () => {
        render(<GifApp />);
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input(input, { target: { value: "one punch" } });
        fireEvent.submit(form);
        fireEvent.input(input, { target: { value: "goku" } });
        fireEvent.submit(form);

        await waitFor(() => {
            expect(screen.getAllByRole("img")).toHaveLength(10);
        });
    });

    test("should not add a new category if it is repeated", async () => {
        render(<GifApp />);
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input(input, { target: { value: "one punch" } });
        fireEvent.submit(form);
        fireEvent.input(input, { target: { value: "one punch" } });
        fireEvent.submit(form);

        await waitFor(() => {
            expect(screen.getAllByRole("img")).toHaveLength(5);
        });
    });
});
