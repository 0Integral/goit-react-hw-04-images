import axios from 'axios';

const API_KEY = '32802250-478a62fdefab1f19526f29480';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImage({ search }, page) {
  try {
    const result = await axios.get(
      `${BASE_URL}?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return result.data;
  } catch (error) {
    console.error(error);
  }
}
