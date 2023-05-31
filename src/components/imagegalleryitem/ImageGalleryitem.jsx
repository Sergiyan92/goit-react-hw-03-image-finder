const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick }) => {
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
