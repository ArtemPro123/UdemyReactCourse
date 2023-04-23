import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID ykRr-TruivY7oJ7oWw8W0Njc4GzIRRnYClhiHnZoLtM'
    },
    params: {
      query: term,
    },
  });
  console.log(response.data.results); 
  return response.data.results;
};

export default searchImages; 