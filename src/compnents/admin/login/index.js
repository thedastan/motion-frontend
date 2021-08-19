import Form from "./form";


const Container = () => {


    return (
    	<div className="auth">
		  	<div className="register__container active">
			    <div className="register__wrap">
			        <div className="register__holder active">
					    <div className="register__loading">
					        <i className="fas fa-spinner" />
					    </div>
					   	<div className="register__title">	
						    <h3>
						    	Привет Админ
						    </h3>
						</div>
					   	<Form />
					    <i className="close__register fal fa-times" />
					</div>
				</div>
			</div>
		</div>
    )
}

export default Container;
