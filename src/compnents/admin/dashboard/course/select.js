import { useField } from 'formik';
import { useSelector } from 'react-redux';

const Select = () => {
	const [field] = useField({name: 'category'});

	const state = useSelector(state => {
		return {
			allCategory: state.category.allCategory,
			allCategoryLoaded: state.category.allCategoryLoaded
		}
	});

	const outData = () => {
		if(state.allCategoryLoaded){
			if(state.allCategory.length){
				return state.allCategory.filter(el => el.categoryId !== 'all').map((elem, i) => {
					return <option value={elem.categoryId} key={elem._id}>{elem.title}</option>
				})
			}
			return <option>Нету категорий</option>
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