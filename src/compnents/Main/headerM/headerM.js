import React from 'react';
import './headerM.css'
import { Link, NavLink } from "react-router-dom";
import Logo from "../img/logo motion web.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBurger from "./BurgerMenu";

const HeaderM = () => {
    return (



        <header className="headerM">
            <div className="container">
                <div className="menuM">
                    <NavLink to="/" className="logo-block">
                        <img className="logo" src={Logo} alt=""/>
                        <h3 className="logo1">MOTION WEB </h3>
                    </NavLink>
                    <nav className="nav-menuM">
                        <Link className="nav-itemM">Главная</Link>
                        {/*<Link className="nav-itemM">О нас</Link>*/}
                        <NavLink to="/courses" className="nav-itemM">Наши курсы</NavLink>
                        <NavLink to="/dev" className="nav-itemM">Наши услуги</NavLink>
                    </nav>
                  <MenuBurger/>
                </div>

            </div>
        </header>


    )
}
export default HeaderM