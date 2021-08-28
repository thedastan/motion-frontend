import { Formik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';

import Input from '../../input';
import Select from './select';
import Navigation from "../../navigation";


const CourseField = ({ onSubmitHandler, initialValues }) => {
	const state = useSelector(state => {
		return {
			isLoading: state.admin.courseChangeLoading,
			courseChangeMessage: state.admin.courseChangeMessage
		}
	});
	if(!initialValues){
		initialValues = {
			courseName: "",
			coursePrice: "",
	        courseDiscount: "",
	        category: "",
	        imageUrl: "",
	        schedule: "",
	        courseTime: "",
	        tools: "",
	        courseDesc: ""
		}
	}
    const validate = Yup.object({
        courseName: Yup.string()
            .required('Поле courseName обязательна'),
        coursePrice: Yup.string()
            .required('Поле coursePrice обязательна'),
        courseDiscount: Yup.string()
            .required('Поле courseDiscount обязательна'),
        category: Yup.string()
            .required('Поле category обязательна'),
        imageUrl: Yup.string()
            .required('Поле imageUrl обязательна'),
        schedule: Yup.string()
            .required('Поле schedule обязательна'),
        courseTime: Yup.string()
            .required('Поле courseTime обязательна'),
        tools: Yup.string()
            .required('Поле tools обязательна'),
        courseDesc: Yup.string()
            .required('Поле courseDesc обязательна'),
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
			                        <Input type="text" name="courseName" label="Имя курса"/>
			                        <Input type="text" name="coursePrice" label="Цена курса"/>
			                        <Input type="text" name="courseDiscount" label="Старая Цена"/>
			                        <Input type="text" name="imageUrl" label="Изображение"/>
			                        <Input type="text" name="schedule" label="График курса"/>
			                        <Input type="text" name="courseTime" label="Общяя время курса"/>
			                        <Input type="text" name="tools" label="Изображение инструментов"/>
			                        <Input type="text" name="courseDesc" label="Толоо планы"/>
			                        <Select />
			                        <div className="register__item">
			                            <button type="submit" className="register__button">
											{initialValues._id ? "Изменить" : "Добавить"}
			                            </button>
			                            {state.courseChangeMessage && <div className="text-dark">{state.courseChangeMessage}</div>}
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