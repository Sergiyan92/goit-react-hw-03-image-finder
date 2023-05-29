import { Component } from 'react';
import * as basicLightbox from 'basiclightbox';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, onClose } = this.props;
    return (
      <div className="overlay" onClick={onClose}>
        <div className="modal">
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
