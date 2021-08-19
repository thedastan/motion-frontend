import { useDispatch } from 'react-redux';

import CourseFields from './courseFields';
import { 
	setCourseChangeLoading,
	setCourseChangeMessage 
} from '../../../../redux/reducers/admin';
import adminApi from '../../http';


const AddCourse = () => {
	const dispatch = useDispatch();
	const onSubmitHandler = async (values, actions) => {
		dispatch(setCourseChangeLoading(true));
		const result = {
			message: "",
			errors: {}
		}
		try {
			const { data } = await adminApi.post('/admin/new-course', values);
			result.message = 'Курс успешно добавлен';
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
			dispatch(setCourseChangeMessage(result.message))
			dispatch(setCourseChangeLoading(false));
		}
	}
	return (
		<CourseFields onSubmitHandler={onSubmitHandler} />
	);
}


export default AddCourse;