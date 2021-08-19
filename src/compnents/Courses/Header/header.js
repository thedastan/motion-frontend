import React from 'react'
import './header.css'
import Logo from '../../Main/img/logo motion web.png';
import { NavLink } from "react-router-dom";


const Header = () => {
    return (

            <header id="header">
                <div className="container">
                    <div className="nav-menu">
                        <div className="header__menu">
                            <NavLink to="/">
                                <img src={Logo} alt="" className="logo"/>
                            </NavLink>
                            <h1 className="logo-text">motion web </h1>
                        </div>
                    </div>
                    <div className="lini"/>
                </div>
            </header>

    )
}

export default Header
