import {useField} from "formik";


const Input = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <div className="register__item">
            <span className="input_top_title margin-bottom">
                {label}
            </span>
            <div>
                <input
                    {...field}
                    {...props}
                    className="register__input _req"
                />
                {meta.touched && meta.error && <div className="req-message">{meta.error}</div>}
            </div>
        </div>
    )
}


export default Input;