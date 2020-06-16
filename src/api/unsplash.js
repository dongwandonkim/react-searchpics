import axios from 'axios';

export default axios.create({
  headers: {
    baseURL: 'https://api.unsplash.com',
    Authorization: 'Client-ID rHxOKOC5aVAwkKlQWGNGl-NpzZNDVE2OYy_vflI1VtE',
  },
});
