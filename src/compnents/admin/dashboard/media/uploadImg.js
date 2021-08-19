import React from 'react';

import adminApi from '../../http';


const UploadImg = () => {
	const [isLoading, setIsLoading] = React.useState(false);
	const [message, setMessage] = React.useState("");

	const imgUpLoadForm = React.useRef(null);
	const uploadImg = async () => {
		setIsLoading(true);
		const form = new FormData(imgUpLoadForm.current);
		form.append("dsfsd", "fkas");
		const result = {
			message: ""
		}
		try{
			await adminApi({
				method: 'post',
				url: '/admin/upload-img',
				data: form,
				headers: { "Content-Type": "multipart/form-data" },
			});
			result.message = 'Изображение успешно добавлено';
		}catch(e){
			if(e.response){
				if(e.response.data && e.response.data.message){
					result.message = e.response.data.message;
				}else {
					result.message = 'Произошла какая то ошибка';
				}
			}else {
				result.message = 'Произошла какая то ошибка';
			}
		} finally {
			setMessage(result.message);
			setIsLoading(false);
		}
	}

	return (	
		<div className="position-relative">
			<div className={`register__loading ${isLoading ? "active": ""}`}>
				<i className="fas fa-spinner" />
			</div>
			<form ref={imgUpLoadForm}>
				<input type="file" name="name"/>
			</form>
			{message && <p className="text-dark">{message}</p>}
			<button onClick={uploadImg}>SEND</button>
		</div>
	)
}

export default UploadImg;