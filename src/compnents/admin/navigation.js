import {NavLink} from "react-router-dom";


const Navigation = () => {

    return (
        <NavLink className="text-dark btn btn-primary z-1" to={"/admin"}>
            Назад
        </NavLink>
    )
}

export default Navigation;