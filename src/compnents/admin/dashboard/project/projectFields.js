import { Formik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';

import Input from '../../input';
import Navigation from "../../navigation";


const CourseField = ({ onSubmitHandler, initialValues }) => {
	const state = useSelector(state => {
		return {
			isLoading: state.admin.projectChangeLoading,
			message: state.admin.projectChangeMessage
		}
	});
	if(!initialValues){
		initialValues = {
			title: "",
			description: "",
			imageUrl: "",
			link: ""
		}
	}
    const validate = Yup.object({
        title: Yup.string()
            .required('Поле courseName обязательна'),
        description: Yup.string()
            .required('Поле coursePrice обязательна'),
        imageUrl: Yup.string()
            .required('Поле courseDiscount обязательна'),
        link: Yup.string()
            .required('Поле category обязательна'),
    })

	return (
		<div className="auth">
			<Navigation />
		  	<div className="register__container active">
			    <div className="register__wrap">
			        <div className="register__holder active">
					    <div className={`register__loading ${state.isLoading ? "active": ""}`}>
					        <i className="fas fa-spinner" />
					    </div>
					   	<div className="register__title">	
						    <h3>
						    	Привет Админ
						    </h3>
						</div>
					   	<Formik
			                initialValues={initialValues}
			                validationSchema={validate}
			                onSubmit={onSubmitHandler}
			            >
			                {({values, handleSubmit}) => (
			                     <form onSubmit={handleSubmit} className="registerForm">
			                        <Input type="text" name="title" label="Имя проекта"/>
			                        <Input type="text" name="description" label="Описания"/>
			                        <Input type="text" name="link" label="Ссылка на проект"/>
			                        <Input type="text" name="imageUrl" label="Изображение"/>
			                        <div className="register__item">
			                            <button type="submit" className="register__button">
			                              Изменить
			                            </button>
			                            {state.message && <div className="text-dark">{state.message}</div>}
			                        </div>
			                    </form>
			                )}
			            </Formik>
					    <i className="close__register fal fa-times" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default CourseField;