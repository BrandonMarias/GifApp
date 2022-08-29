import { render, screen } from "@testing-library/react";
import { GifCard } from "../../src/components/GifCard";

describe('test on <GifCard/>', () => { 
    const title = 'title';
    const img = 'https://media1.giphy.com/media/l0Hl6qZQQ7qQ/200.gif';
    test("should make a snapshot", () => {
        const {container} = render(<GifCard title="title" img="img" />);
        expect(container).toMatchSnapshot();
    });
    test("should show the title and image", () => {
    render(<GifCard title={title} img={img} />);
    // expect(document.querySelector('img').src).toBe(img);
    // expect(document.querySelector('img').alt).toBe(title);
    const { src, alt} = screen.getByRole('img');
    expect(src).toBe(img);
    expect(alt).toBe(title);

    } );
    test("should show the title in the paragraph", () => {
        render(<GifCard title={title} img={img} />);
        expect(screen.getByText(title)).toBeTruthy();    
    } );
 }) 