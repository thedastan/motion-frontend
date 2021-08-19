import { useDispatch } from 'react-redux';

import ProjectFields from './projectFields';
import { 
	setProjectChangeLoading,
	setProjectChangeMessage 
} from '../../../../redux/reducers/admin';
import adminApi from '../../http';


const AddProject = () => {
	const dispatch = useDispatch();
	const onSubmitHandler = async (values, actions) => {
		dispatch(setProjectChangeLoading(true));
		const result = {
			message: "",
			errors: {}
		}
		try {
			await adminApi.post('/admin/new-project', values);
			result.message = 'Проект успешно добавлен';
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
			dispatch(setProjectChangeMessage(result.message))
			dispatch(setProjectChangeLoading(false));
		}
	}
	return (
		<ProjectFields onSubmitHandler={onSubmitHandler} />
	);
}


export default AddProject;