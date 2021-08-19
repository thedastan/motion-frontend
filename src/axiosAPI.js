import axios from 'axios';

const axiosAPI = axios.create({
        withCredentials: true,
        baseURL: 'https://motion-web-server.herokuapp.com'
})

export default axiosAPI;