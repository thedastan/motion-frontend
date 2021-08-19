import Input from "../input";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux'; 
import AuthService from '../authService';

const Form = () => {
    const { login } = AuthService();
    const state = useSelector(state => {
        return {
            isAdmin: state.auth.isAdmin,
            authInfoLoaded: state.auth.authInfoLoaded,
            loginMessage: state.auth.loginMessage
        }
    })
    const validate = Yup.object({
        username: Yup.string()
            .required('Поле username обязательна'),
        password: Yup.string()
            .required('Поле password обязательна')
    })


    return (
        <>
            <Formik
                initialValues={{
                    username: "",
                    password: ""
                }}
                validationSchema={validate}
                onSubmit={async (values, actions) => {
                    const result = await login(values);
                    actions.setErrors(result);
                    actions.setSubmitting(false);
                }}
            >
                {({values, handleSubmit}) => (
                     <form onSubmit={handleSubmit} className="registerForm">
                        <Input type="text" name="username" label="Username" />
                        <Input type="text" name="password" label="password" />
                        <div className="register__item">
                            <button type="submit" className="register__button">
                              Submit
                            </button>
                            {state.loginMessage && <h4 className="text-dark">{state.loginMessage}</h4>}
                        </div>
                    </form>
                )}
            </Formik>
        </>
    )
}

export default Form;