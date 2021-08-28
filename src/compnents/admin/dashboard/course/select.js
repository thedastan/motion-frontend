import { useField } from 'formik';
import { useSelector } from 'react-redux';
import {useEffect} from "react";

const Select = () => {
	const [field, meta, helpers] = useField({name: 'category'});

	const state = useSelector(state => {
		return {
			allCategory: state.category.allCategory,
			allCategoryLoaded: state.category.allCategoryLoaded
		}
	});

	useEffect(() => {
		if(state.allCategoryLoaded){
			if(state.allCategory.length){
				helpers.setValue(state.allCategory[0].categoryId);
			}
		}
	}, [state.allCategoryLoaded]);

	const outData = () => {
		if(state.allCategoryLoaded){
			if(state.allCategory.length){
				return state.allCategory.filter(el => el.categoryId !== 'all').map((elem, i) => {
					return <option value={elem.categoryId} key={elem._id}>{elem.title}</option>
				})
			}
			return <option className={"text-dark"}>Нету категорий</option>
		}else {
			return <option>Загружается</option>
		}
	}
	return (
		<select
			className="form-select form-select-lg mb-3 border"
			aria-label="Default select example"
			{...field}
			name="category"
		>
			{outData()}
		</select>
	)
}

export default Select;