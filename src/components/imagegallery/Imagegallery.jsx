const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className="gallery">
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
