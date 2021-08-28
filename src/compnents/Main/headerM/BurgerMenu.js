import React from "react";
import {slide as Menu} from "react-burger-menu";
import {Link, NavLink} from "react-router-dom";

const MenuBurger = () => {
    return (
        // Pass on our props
        <Menu right   >
            <Link id="nav-itemM"  className="nav-itemM">Главная</Link>
            <NavLink  id="nav-itemM"  to="/courses" className="nav-itemM">Наши курсы</NavLink>
            <NavLink id="nav-itemM"   to="/dev" className="nav-itemM">Наши услуги</NavLink>

        </Menu>
    );
};
export default MenuBurger
