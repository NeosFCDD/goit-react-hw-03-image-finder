import css from "components/styles.module.css";
import PropTypes from "prop-types";

export const ImageGalleryItem = ({ src, alt, bigImg, onClick }) => {
  return (
    <li
      className={css.ImageGalleryItem}
      onClick={() => onClick({ bigImg, alt })}
    >
        <img
          className={css.ImageGalleryItemImage}
          src={src}
          alt={alt}
          data-src={bigImg}
        />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  bigImg: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};