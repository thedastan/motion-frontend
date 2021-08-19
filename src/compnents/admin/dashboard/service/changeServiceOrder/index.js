import React from 'react';
import { NavLink } from 'react-router-dom';

import adminApi from '../../../http';
import Item from './item';


const ServiceOrderOut = () => {
	const [hasError, setHasError] = React.useState(false);
	const [isLoaded, setIsLoaded] = React.useState(false);
	const [data, setData] = React.useState([]);
	const [initialData, setInitialData] = React.useState([]);
	const [refetch, setRefetch] = React.useState(false);

	const [currentItem, setCurrentItem] = React.useState(null);
	const [changeOrderMessage, setOrderMessage] = React.useState("");
	const [changing, setChanging] = React.useState(false);

	const fetchData = React.useCallback(async () => {
		setIsLoaded(false);
		try {
			const res = await adminApi.post('/services/get-services');
			setData(res.data.services);
			setInitialData(res.data.services);
		} catch(e) {
			setHasError(true);
		} finally {
			setIsLoaded(true);
			setRefetch(false);
		}
	}, []);

	React.useEffect(() => {
		fetchData();
	}, [fetchData]);

	React.useEffect(() => {
		if(refetch){
			fetchData();
		}
	}, [refetch]);

	const onDragStart = (e, item) => {
		setCurrentItem(item)
	}

	const onDragEnd = (e) => {
		e.preventDefault();
		e.target.closest('.service__item').style.boxShadow = '';
	}

	const onDragOver = (e) => {
		e.preventDefault();
		e.target.closest('.service__item').style.boxShadow = '1px 1px 15px 1px rgb(0 0 0 / 40%)';
	}

	const onDrop = (e, item) => {
		e.preventDefault();
		const result = data.map((elem, i) => {
			if(elem._id === item._id){
				return {...elem, order: currentItem.order}
			}
			if(elem._id === currentItem._id){
				return {...elem, order: item.order}
			}
			return elem;
		})
		setData(result);
	}

	const sortCards = (a, b) => {
		if(a.order < b.order){
			return 1;
		}else {
			return -1;
		}
	}

	const outData = () => {
		if(isLoaded){
			if(hasError){
				return <h2 className="text-dark">Произошла какая то ошибка</h2>
			}
			if(data.length){
				return data.sort(sortCards).map((elem, i) => {
					return <Item 
						item={elem} 
						onDragStart={(e) => onDragStart(e, elem)} 
						onDragLeave={(e) => onDragEnd(e)}
						onDragEnd={(e) => onDragEnd(e)}
						onDragOver={(e) => onDragOver(e)}
						onDrop={(e) => onDrop(e, elem)}
						key={elem._id} 
					/>
				});
			}
			return <h2 className="text-dark">Услуг пока что нету добавьте по ссылке <NavLink className="text-dark" to="/admin/add-service">Перейти</NavLink></h2>
		}
		return <h2 className="text-dark">Загружается</h2>
	}

	const changeOrder = () => {
		const sendedData = initialData.filter(el => {
			const findEl = data.find(elem => elem._id === el._id);
			return el._id === findEl._id && el.order !== findEl.order;
		});
		if(!sendedData.length){
			return setOrderMessage("Вы ничего не изменили");
		}
		changeOrderFetch(sendedData.map(el => {
			const findEl = data.find(elem => elem._id === el._id);
			return {...el, order: findEl.order}
		}));
	}

	const changeOrderFetch = React.useCallback(async (info) => {
		setChanging(true);
		const result = {
			message: ""
		}
		try {
			const res = await adminApi.post('/admin/change-services-order', {data: info});
			result.message = 'Успешно изменено';
		} catch(e) {
			result.message = 'Произошла какая то ошибка';
		} finally {
			setRefetch(true);
			setChanging(false);
			setOrderMessage(result.message);
		}
	}, []);

	return (
		<div className="position-relative">
			<div className={`register__loading ${changing ? "active": ""}`}>
				<i className="fas fa-spinner" />
			</div>
			<div className="row d-flex justify-content-between py-3 px-3">
				{outData()}
			</div>
			<div className="d-flex flex-column align-items-start justify-content-start">
				<button onClick={changeOrder}>CLICK</button>
				{changeOrderMessage && <p className="text-dark">{changeOrderMessage}</p>}
			</div>
		</div>
	)
}

export default ServiceOrderOut;