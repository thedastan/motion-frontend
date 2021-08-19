import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import axiosAPI from '../../../../axiosAPI';
import CourseItem from './courseItem';
import { 
	setCourseSkip, 
	setCourseCount,
	setRefetch
} from '../../../../redux/reducers/admin';



const OutCourse = () => {
	const dispatch = useDispatch();
	const state = useSelector(state => {
		return {
			skip: state.admin.courseSkip,
			count: state.admin.courseCount,
			refetch: state.admin.refetch
		}
	})
	const [hasError, setHasError] = React.useState(false);
	const [isLoaded, setIsLoaded] = React.useState(false);
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		if(state.refetch){
			fetchData();
		}
	}, [state.refetch])


	const fetchData = React.useCallback(async () => {
		try {
			const res = await axiosAPI.post('/api/courses/get-courses', {
				limit: state.count,
				skip: state.skip
			});
			setData(res.data.courses);
		} catch(e) {
			setHasError(true);
		} finally {
			dispatch(setRefetch(false));
			setIsLoaded(true);
		}
	}, [state.skip, state.count]);

	React.useEffect(() => {
		fetchData();
	}, [fetchData]);


	const outData = () => {
		if(isLoaded){
			if(hasError){
				return <h2 className="text-dark">ОШИБКА НА СТОРОНЕ СЕРВЕРА</h2>
			}
			if(data.length){
				return data.map((elem, i) => {
					return <CourseItem key={elem._id} item={elem} />
				})
			}
			return <h2 className="text-dark">ПОКА ЧТО КУРСОВ НЕТУ, ДОБАВЬТЕ КУРС ПО ССЫЛКЕ <NavLink to="/admin/add-course">ДОБАВЬТЕ КУРС</NavLink></h2>
		}else {
			return <h1 className="text-dark">ЗАГРУЖАЕТСЯ ...</h1>
		}
	}

	return (
		<ul>
			{outData()}
		</ul>
	)
}

export default OutCourse;