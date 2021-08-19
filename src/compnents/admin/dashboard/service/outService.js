import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import axiosAPI from '../../../../axiosAPI';
import ServiceItem from './serviceItem';

import { setRefetch } from '../../../../redux/reducers/admin';



const OutServices = () => {
	const dispatch = useDispatch();
	const state = useSelector(state => {
		return {
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
			const res = await axiosAPI.post('/api/services/get-services');
			setData(res.data.services);
		} catch(e) {
			console.log(e)
			setHasError(true);
		} finally {
			dispatch(setRefetch(false));
			setIsLoaded(true);
		}
	}, []);

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
					return <ServiceItem item={elem} />
				})
			}
			return <h2 className="text-dark">ПОКА ЧТО УСЛУГОВ НЕТУ, ДОБАВЬТЕ КУРС ПО ССЫЛКЕ <NavLink to="/admin/add-project">ДОБАВЬТЕ КУРС</NavLink></h2>
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

export default OutServices;