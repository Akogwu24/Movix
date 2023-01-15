export const baseURL = process.env.REACT_APP_BASE_URL;
export const api_key = process.env.REACT_APP_API_KEY;

export const IMG_300 = 'https://image.tmdb.org/t/p/w300';
export const IMG_500 = 'https://image.tmdb.org/t/p/w500';
export const IMG_780 = 'https://image.tmdb.org/t/p/w780';
export const IMG_1200 = 'https://image.tmdb.org/t/p/w1280';
export const IMG_ORIGINAL = 'https://image.tmdb.org/t/p/original';

export function capitalizeFirstLetter(string) {
  return string?.charAt(0)?.toUpperCase() + string?.slice(1);
}
