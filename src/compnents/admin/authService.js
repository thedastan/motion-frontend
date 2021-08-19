import {useDispatch} from "react-redux";
import axiosAPI from "../../axiosAPI";
import { setAuthLoaded, setIsAdmin, setLoginMessage} from "../../redux/reducers/auth";
import { useHistory } from "react-router-dom";



const AuthService = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const login = async values => {
        const info = {
            errors: {},
            message: ""
        }
        try {
            const res = await axiosAPI.post('/api/auth/login', values);
            localStorage.setItem('token', res.data.accessToken);
            dispatch(setIsAdmin(true));
            history.push('/admin');
        } catch(e) {
            if (e.response) {
                if(e.response.status === 400){
                    if(e.response.data && e.response.data.validationErrors){
                        e.response.data.validationErrors.forEach(elem => {
                            info.errors[elem.key] = elem.message;
                        });
                    }
                    info.message = e.response.data.message || "Error on server side";
                }else if(e.response.status === 500){
                    info.message = e.response.data.message || "Error on server side";
                }
            }else if(e.request){
                info.message = "Server on error";
            } else {
                info.message = "Server on error";
            }
        }finally{
            dispatch(setLoginMessage(info.message));
            return info.errors;
        }
    }
    const checkIsAdmin = async () => {
        try {
            await axiosAPI.post('/api/auth/refresh');
            dispatch(setIsAdmin(true));
        }catch(e){
            dispatch(setIsAdmin(false));
        }finally {
            dispatch(setAuthLoaded(true));
        }
    }
    return {
        login,
        checkIsAdmin
    }
}

export default AuthService;