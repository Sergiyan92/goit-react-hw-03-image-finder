import css from './ImageGalleryitem.module.css';
import PropTypes from 'prop-types';
const ImageGalleryItem = ({ webformatURL }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img src={webformatURL} alt="" className={css.ImageGalleryItem_image} />
    </li>
  );
};

export default ImageGalleryItem;
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
};
