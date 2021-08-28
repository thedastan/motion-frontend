import React from "react";
import {Link, NavLink} from "react-router-dom";
import Logo from "../img/logo.svg";
import './headerD.css'
import '../css/media.css'
import MenuBurger from "../../Main/headerM/BurgerMenu";

const HeaderD = () => {
    return (
        <header id="headerD">
            <div className="container">
                <NavLink to="/" className="header__logo">
                    <img src={Logo} alt="" className="logoD"/>
                    <h1 className="logo-textD">motion web </h1>
                </NavLink>

                <nav className="nav-menuD">
                    <Link className="nav-itemD">Главная</Link>
                    {/*<Link className="nav-itemM">О нас</Link>*/}
                    <NavLink to="/courses" className="nav-itemD">Наши курсы</NavLink>
                    <NavLink to="/dev" className="nav-itemD">Наши услуги</NavLink>
                </nav>
                <MenuBurger/>


            </div>


        </header>


    )
}
export default HeaderD