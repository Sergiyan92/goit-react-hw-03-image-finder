import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api/?key=36214918-c54bf3212caa76f3a1fc6176b&image_type=photo&orientation=horizontal';

export const getImages = async (page, query) => {
  const response = await axios.get(`&q=${query}&page=${page}&per_page=12`);
  const images = response.data.hits;
  const total = response.data.totalHits;
  return {
    imagesData: images.map(({ id, webformatURL, largeImageURL }) => ({
      id,
      webformatURL,
      largeImageURL,
    })),
    totalImages: total,
  };
};
