import axios from 'axios';
const pixabayUrl = 'https://pixabay.com/';

const pixabayKey = '45258111-19b0afcb9384c7a2acd16a24f';

const DEFAULR_PER_PAGE = 15;

axios.defaults.baseURL = 'https://pixabay.com/';
axios.defaults.params = {};
axios.defaults.params['key'] = pixabayKey;

export async function getImagesFromPixabay(query, page) {
  let params = {
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    // safesearch: true,
    per_page: DEFAULR_PER_PAGE,
    page: page,
  };

  return axios.get('api', { params });
}
