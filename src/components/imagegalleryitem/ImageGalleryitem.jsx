import css from './ImageGalleryitem.module.css';

const ImageGalleryItem = ({ webformatURL }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img src={webformatURL} alt="" className={css.ImageGalleryItem_image} />
    </li>
  );
};

export default ImageGalleryItem;
