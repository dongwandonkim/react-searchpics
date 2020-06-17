import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID C68oYfN0_I-SKnc0pml4INJYkRBvZvxO0z7BBNzss-4',
  },
});
