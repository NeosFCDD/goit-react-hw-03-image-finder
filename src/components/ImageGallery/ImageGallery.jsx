import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import css from "components/styles.module.css";
import PropTypes from "prop-types";

export const ImageGallery = ({ gallery, onClick }) => {
  return (
    <ul className={css.ImageGallery}>
      {gallery.map((image) => (
        <ImageGalleryItem
          key={image.id}
          src={image.webformatURL}
          alt={image.tags}
          bigImg={image.largeImageURL}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};