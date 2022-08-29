const { useFetchGifs } = require("../../src/hooks/useFetchGifs");
const {renderHook, waitFor} = require("@testing-library/react");

describe("test on useFetchGifs hook", () => {
    
    const category = "cat";

    test("should resturn te initial state", () => {
        const { result } = renderHook(() => useFetchGifs(category)); 
        const [gifs, isloading] = result.current;
        expect(gifs).toEqual([]); 
        expect(isloading).toBe(true); 
    });

    test("should return an array of images and isloading as false", async () => {
        const { result } = renderHook(() => useFetchGifs(category));
        await waitFor(() => {
            const [gifs, isloading] = result.current;
            expect(gifs.length).toBe(5);
            expect(isloading).toBe(false);
        }
        );
    } );

});
