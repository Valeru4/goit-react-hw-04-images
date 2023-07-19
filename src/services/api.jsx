import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '17538652-b999fbbbfe57ad3fb90b083ce';

export const fetchImages = async (searchQuery, page) => {
  const response = await axios.get(
    `${URL}?&q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  // console.log(response);

  return response.data;
};
