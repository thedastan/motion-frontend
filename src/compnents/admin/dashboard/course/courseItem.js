import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { 
	setModalActive,
	setDeleteDataId,
	setDeleteUrl,
} from '../../../../redux/reducers/admin';


const CourseItem = ({item}) => {
	const dispatch = useDispatch();

	const deleteCourse = () => {
		dispatch(setDeleteUrl('/delete-course'));
		dispatch(setDeleteDataId(item._id));
		dispatch(setModalActive(true));
	}

	return (
		<div className="row">
			<div className="col py-4">
				<div className="d-flex flex-column"> 
					<span className="text-dark my-1 btn btn-danger">{item.courseName}</span>
					<span className="text-dark my-1 btn btn-danger">{item.coursePrice}</span>
					<NavLink to={`/admin/change-course/${item._id}`} className="text-dark my-1 btn btn-danger">Изменить</NavLink>
					<span className="text-dark my-1 btn btn-danger" onClick={deleteCourse}>Удалить</span>
				</div>
			</div>
		</div>
	)
}

export default CourseItem;