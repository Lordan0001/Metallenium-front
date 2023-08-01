import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:7041/api',
   // withCredentials: true,
   // crossDomain: true,
});
export default instance;