const ImageGalleryItem = ({ webformatURL }) => {
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
