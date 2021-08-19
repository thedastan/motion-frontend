import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import ServiceFields from './serviceFields';
import adminApi from '../../http';
import { 
	setServiceChangeLoading,
	setServiceChangeMessage 
} from '../../../../redux/reducers/admin';

const ChangeProject = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const [isLoaded, setIsLoaded] = React.useState(false);
	const [hasError, setHasError] = React.useState(false);
	const [service, setService] = React.useState(null);
	const [message, setMessage] = React.useState("");
 

	const findCourse = React.useCallback(async () => {
		try {
			const res = await adminApi.get(`/services/get-by-id/${id}`);
			setService(res.data.service);
		} catch(e) {
			if (e.response) {
				if(e.response.status === 404){
					setMessage(`Курса с таким id ${id} нету`);
				}else if(e.response.status === 500){
					setMessage("Произошла ошибка на стороне сервера");
				}
			}else {
				setMessage("Произошла ошибка на стороне сервера");
			}
			setHasError(true);
		} finally {
			setIsLoaded(true);
		}
	}, []);

	React.useEffect(() => {
		findCourse();
	}, [findCourse]);


	const onSubmitHandler = async (values, actions) => {
		dispatch(setServiceChangeLoading(true));
		const result = {
			message: "",
			errors: {}
		}
		try {
			await adminApi.post('/admin/change-service', values);
			result.message = 'Услуга успешно изменено';
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

	const outData = () => {
		if(isLoaded){
			if(hasError){
				return <h1 className="text-dark">{message || "Произошла какая то ошибка"}</h1>
			}else {
				return <ServiceFields onSubmitHandler={onSubmitHandler} initialValues={service} />	
			}
		}else {
			return <h1 className="text-dark">LOADING ...</h1>
		}
	}

	return (
		<>
			{outData()}
		</>
	)
}

export default ChangeProject;