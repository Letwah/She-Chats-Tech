import PropTypes from "prop-types";
import "./styles.css";

const Card = ({ slide, index }) => {
  return (
    <div className="swiperCard" key={slide.id} data-index={index}>
      <img className="cardImage" src={slide.imageUrl} alt={slide.title} />
      <div className="details">
        <h2>{slide.title}</h2>
        <p>{slide.description}</p>
        <img
          src={slide.pseudoImageUrl}
          className="cardIcon"
          alt={slide.title}
        />
      </div>
    </div>
  );
};
Card.propTypes = {
  slide: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    pseudoImageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
export default Card;
