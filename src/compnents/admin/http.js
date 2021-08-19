import axios from "axios";
import { setIsAdmin } from '../../redux/reducers/auth';
import store from '../../redux/reducer';



const adminApi = axios.create({
    withCredentials:true,
    baseURL: 'https://motion-web-server.herokuapp.com/api'
})


adminApi.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

adminApi.interceptors.response.use((config) => {
    return config;
}, async error => {
    const orignalRequest = error.config;
    if(error.config && error.response && error.response.status === 401 && !error.config._isRetry){
        orignalRequest._isRetry = true;
        try {
            const response = await adminApi.post('/auth/refresh');
            localStorage.setItem('token', response.data.accessToken);
            return adminApi.request(orignalRequest);
        }catch (e) {
            store.dispatch(setIsAdmin(false));
        }
    }
    if(error.config._isRetry){
        store.dispatch(setIsAdmin(false));
    }
    return Promise.reject(error);
})

export default adminApi;