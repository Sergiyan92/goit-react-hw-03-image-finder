import css from './Imagegallery.module.css';
import PropTypes from 'prop-types';
const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(image => (
        <li
          key={image.id}
          className="gallery-item"
          onClick={() => {
            onClick(image.largeImageURL);
          }}
        >
          <img src={image.webformatURL} alt="" />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
