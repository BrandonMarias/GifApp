import { getGifs } from "../../src/helpers/getGifs";

describe('test on getGifs', () => { 
    const apiKey = "vDyfhWXzGZUESWoYIsyGdtugZ6t69rDi";
    const category = "cats";
    test("should return an array of gifs", async () => {
        const gifs = await getGifs(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=5`);
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            img: expect.any(String),
        })
    });
 })