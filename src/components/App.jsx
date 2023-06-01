import { Component } from 'react';
import Searchbar from './searchbar/Searchbar';
import ImageGallery from './imagegallery/Imagegallery';
import Button from './button/Button';
import Loader from './loader/Loader';
import Modal from './modal/Modal';
import css from '../Styles.module.css';
import { getImages } from '../service/sevice';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
    showModal: false,
    selectedImage: '',
    imagesError: null,
    showBtn: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.page !== page || prevState.query !== query) {
      this.fetchImages();
    }
  }
  fetchImages = async () => {
    try {
      const { page, query } = this.state;
      this.setState({ isLoading: true });
      const { imagesData } = await getImages(page, query);
      this.setState(prevState => ({
        isLoading: false,
        imagesError: null,
        images: [...prevState.images, ...imagesData],
      }));
    } catch (error) {
      this.setState({
        imagesError: error.message,
        isLoading: false,
      });
    }
  };

  handleSubmit = query => {
    if (this.state.query === query) {
      return alert('Please enter a query');
    }
    this.setState({
      query,
      page: 1,
      images: [],
      imagesError: '',
      isLoading: false,
    });
  };
  handleLoadMore = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
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
      <div className={css.App}>
        <Searchbar onSubmit={this.handleSubmit} />

        <ImageGallery images={images} onClick={this.handleImageClick} />

        {isLoading && <Loader />}

        {images.length > 11 && !isLoading && (
          <Button onClick={this.handleLoadMore}>Load More</Button>
        )}

        {showModal && (
          <Modal
            largeImageURL={selectedImage}
            onClose={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}
