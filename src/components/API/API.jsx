import axios from 'axios';
async function fetchImg(search, page) {
    const BASE_URL = 'https://pixabay.com/api/?q='
    const KEY = '33451170-da7868fa9d2d9191c176f5359'

    try {
    const response = await axios.get(`${BASE_URL}${search}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);
          console.log(response);
          return response.data} 
    catch (error) {console.error(error);}
}

export default fetchImg;