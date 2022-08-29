import { GifGrid } from "../../src/components";
import {render, screen} from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('test <GifGrid />', () => {
    const category = 'One Punch';

    test("should show the loading message when isLoading is true", () => {
        useFetchGifs.mockReturnValue([[], true]);
        const { getByText } = render(<GifGrid category={category} />);
        const loadingMessage = getByText('Is loading...');
        expect(loadingMessage).toBeTruthy();

    });

    test("should show the gifs when isLoading is false", () => {
        const gifs = [
            {
                id: "ABC",
                title: "One Punch",
                img: "https://media1.giphy.com/media/l0MYBQQ7zsQkQ/200.gif"
            },
            {
                id: "DEF",
                title: "Goku",
                img: "https://media1.giphy.com/media/l0MYBQQ7zsQkQ/200.gif"
            },
            {
                id: "GHI",
                title: "Naruto",
                img: "https://media1.giphy.com/media/l0MYBQQ7zsQkQ/200.gif"
            },
        ];

        useFetchGifs.mockReturnValue([gifs, false]);
        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img')).toHaveLength(3);
    } );

});