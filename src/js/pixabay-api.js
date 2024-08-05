export function getImagesFromPixabay(query) {
  const pixabayUrl = 'https://pixabay.com/api/';
  const pixabayKey = '45258111-19b0afcb9384c7a2acd16a24f';
  let params = new URLSearchParams({
    key: pixabayKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(pixabayUrl + '?' + params, {
    headers: {
      Accept: 'application/json',
    },
  }).then(response => response.json());
}
