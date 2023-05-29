import { Component } from 'react';
import axios from 'axios';
import Searchbar from './searchbar/Searchbar';
import ImageGallery from './imagegallery/Imagegallery';
import ImageGalleryItem from './imagegalleryitem/ImageGalleryitem';
import Button from './button/Button';
import Loader from './loader/Loader';
import Modal from './modal/Modal';

const API_KEY = '36214918-c54bf3212caa76f3a1fc6176b';
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      page: 1,
      images: [],
      isLoading: false,
      showModal: false,
      selectedImage: '',
    };
  }

  handleSubmit = query => {
    this.setState({ query, page: 1, images: [] }, () => {
      this.fetchImages();
    });
  };

  fetchImages = () => {
    const { query, page } = this.state;
    const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    this.setState({ isLoading: true });

    axios
      .get(url)
      .then(response => {
        const newImages = response.data.hits.map(image => ({
          id: image.id,
          webformatURL: image.webformatURL,
          largeImageURL: image.largeImageURL,
        }));

        this.setState(prevState => ({
          images: [...prevState.images, ...newImages],
          page: prevState.page + 1,
          isLoading: false,
        }));
      })
      .catch(error => {
        console.log(error);
        this.setState({ isLoading: false });
      });
  };

  handleLoadMore = () => {
    this.fetchImages();
  };

  handleImageClick = imageURL => {
    this.setState({ showModal: true, selectedImage: imageURL });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, selectedImage: '' });
  };

  render() {
    const { images, isLoading, showModal, selectedImage } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />

        <ImageGallery images={images}>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              webformatURL={image.webformatURL}
              onClick={() => this.handleImageClick(image.largeImageURL)}
            />
          ))}
        </ImageGallery>

        {isLoading && <Loader />}

        {images.length > 0 && !isLoading && (
          <Button onClick={this.handleLoadMore}>Load More</Button>
        )}

        {showModal && (
          <Modal imageURL={selectedImage} onClose={this.handleCloseModal} />
        )}
      </div>
    );
  }
}
