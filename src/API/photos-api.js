function fetchPhotos(value, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '24005703-1514437038890a8f3813970a7';
  return fetch(
    `${BASE_URL}?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`ERROR`));
  });
}

const api = {
  fetchPhotos,
};
export default api;
