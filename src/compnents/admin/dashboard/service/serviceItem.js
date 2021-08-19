import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { 
	setModalActive,
	setDeleteDataId,
	setDeleteUrl,
} from '../../../../redux/reducers/admin';

const ServiceItem = ({ item }) => {
	const dispatch = useDispatch();
	const deleteProject = () => {
		dispatch(setDeleteUrl('/delete-service'));
		dispatch(setDeleteDataId(item._id));
		dispatch(setModalActive(true));
	}

	return (
		<div className="row">
			<div className="col py-4">
				<div className="d-flex flex-column"> 
					<span className="text-dark my-1 btn btn-danger">{item.title}</span>
					<span className="text-dark my-1 btn btn-danger">{item.description}</span>
					<NavLink to={`/admin/change-service/${item._id}`} className="text-dark my-1 btn btn-danger">Изменить</NavLink>
					<span className="text-dark my-1 btn btn-danger" onClick={deleteProject}>Удалить</span>
				</div>
			</div>
		</div>
	)
}

export default ServiceItem;