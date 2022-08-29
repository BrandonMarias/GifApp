import propTypes from "prop-types";

export const GifCard = ({ title, img }) => {
    return (
        <div className="card">
            <img src={img} alt={title} />
            <p>{title}</p>
        </div>
    );
};

GifCard.propTypes = {
    title: propTypes.string.isRequired, // title of the gif
    img: propTypes.string.isRequired, // url of the gif image to be displayed
};
