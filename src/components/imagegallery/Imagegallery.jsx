const ImageGallery = ({ images }) => {
  return (
    <ul className="gallery">
      {images.map(image => (
        <li key={image.id} className="gallery-item">
          <img src={image.webformatURL} alt="" />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
