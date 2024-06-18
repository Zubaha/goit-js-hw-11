export function searchPhoto(img) {
  const BASE_URL = 'https://pixabay.com/';
  const END_POINT = 'api/';
  const params = URLSearchParams({
    key: '44441755-66eac7c9e6ee4bab758e49d15',
    q: `${img}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;
  return fetch(url).then(res => res.json());
}
