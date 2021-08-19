import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import adminApi from '../../http';
import Input from '../../input';


const DeleteImg = () => {
	const [isLoading, setIsLoading] = React.useState(false);
	const [message, setMessage] = React.useState("");

	const validation = Yup.object({
		name: Yup.string()
			.required("Вы ничего не ввели")
	});

	return (	
		<div className="position-relative">
			<div className={`register__loading ${isLoading ? "active": ""}`}>
				<i className="fas fa-spinner" />
			</div>
			<Formik
				initialValues={{
					name: ""
				}}
				validationSchema={validation}
				onSubmit={async (values, actions) => {
					setIsLoading(true);
					const result = {
						message: ""
					}
					try {
						const {data} = await adminApi.post('/admin/check-img', values);
						result.message = data.message;
					} catch(e) {
						console.log(e)
						if(e.response){
							result.message = 'Произошла какая то ошибка';
						}else {
							result.message = 'Произошла какая то ошибка';
						}
					} finally {
						setMessage(result.message);
						setIsLoading(false);
					}
				}}
			>
				{({handleSubmit}) => (
					<form onSubmit={handleSubmit}>
						<Input name="name" />
						<button type="submit">SEND</button>
					</form>
				)}
			</Formik>
			{message && <p className="text-dark">{message}</p>}
		</div>
	)
}

export default DeleteImg;