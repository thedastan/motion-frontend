import React from 'react';
import adminApi from '../http';
import { useDispatch, useSelector } from 'react-redux';

import { setRefetch, setModalActive, setCanDelete } from '../../../redux/reducers/admin';


const DeleteModal = () => {
	const [message, setMessage] = React.useState("Вы уверены?");
	const [isLoading, setIsLoading] = React.useState(false);
	const dispatch = useDispatch();
	const state = useSelector(state => {
		return {
			isActive: state.admin.modalActive,
			canDelete: state.admin.canDelete,
			deleteDataId: state.admin.deleteDataId,
			deleteUrl: state.admin.deleteUrl
		}
	})

	React.useEffect(() => {
		if(state.canDelete){
			fetchToDelete();
		}
	}, [state.canDelete]);


	const fetchToDelete = React.useCallback(async () => {
		setIsLoading(true);
		setMessage("Удаляем элемент");
		const result = {
			message: ""
		}
		try {
			await adminApi.post(`/admin/${state.deleteUrl}`, {_id: state.deleteDataId});
			result.message = "Успешно удалено";
		} catch(e) {
			result.message = "Произошла какая то ошибка на стороне сервера";
		} finally {
			dispatch(setRefetch(true));
			dispatch(setCanDelete(false));
			setIsLoading(false);
			dispatch(setModalActive(false));
			alert(result.message);
		}
	}, [state.deleteUrl, state.deleteDataId]);

	const closeModal = () => {
		setMessage("Вы уверены?");
		dispatch(setModalActive(false));
	}

	const deleteData = () => {
		dispatch(setCanDelete(true));
	}

	if(!state.isActive){
		return null;
	}

	return (
		<div class="modal fade show" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div className={`register__loading ${isLoading && "active"}`}>
				<i className="fas fa-spinner" />
			</div>
			<div class="modal-dialog">
			    <div class="modal-content">
				    <div class="modal-header">
				        <h5 class="modal-title" id="exampleModalLabel">Удаление</h5>
				    </div>
				    <div class="modal-body">
				        <p className="text-dark">{message}</p>
				    </div>
				    <div class="modal-footer">
				        	<button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Закрыть</button>
				        <button type="button" class="btn btn-primary" onClick={deleteData}>Удалить</button>
				   	</div>
			    </div>
			</div>
		</div>
	)
}

export default DeleteModal;