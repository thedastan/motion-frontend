import { useDispatch } from 'react-redux';

import ServiceFields from './serviceFields';
import { 
	setServiceChangeLoading,
	setServiceChangeMessage 
} from '../../../../redux/reducers/admin';
import adminApi from '../../http';


const AddService = () => {
	const dispatch = useDispatch();
	const onSubmitHandler = async (values, actions) => {
		const dataValues = {...values};
		dispatch(setServiceChangeLoading(true));
		const result = {
			message: "",
			errors: {}
		}
		try {
			const { data } = await adminApi.get('/services/get-last-service');
			dataValues.order = data.service.order + 1;
		} catch(e) { 
			dispatch(setServiceChangeMessage("Произошла какая то ошибка"));
			return dispatch(setServiceChangeLoading(false));
		}
		try {
			await adminApi.post('/admin/new-service', dataValues);
			result.message = 'Услуга успешно добавлена';
		} catch(e) {
			if (e.response) {
				if(e.response.status === 400){
					if(e.response.data && e.response.data.validationErrors){
						e.response.data.validationErrors.map((elem, i) => {
							result.errors[elem.key] = elem.message;
						});
					}
					if(e.response.data && e.response.data.message){
						result.message = e.response.data.message;
					} 
				}else if(e.response.status === 500){
					if(e.response.data && e.response.data.message){
						result.message = e.response.data.message;
					}else {
						result.message = 'Произошла ошибка на стороне сервера';
					}
				}
			}
		} finally {
			actions.setErrors(result.errors);
			dispatch(setServiceChangeMessage(result.message))
			dispatch(setServiceChangeLoading(false));
		}
	}
	return (
		<ServiceFields onSubmitHandler={onSubmitHandler} />
	);
}


export default AddService;