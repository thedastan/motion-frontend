import React from "react";
import './css/dev_style.css'
import {NavLink} from "react-router-dom";
import Logo from "../Main/img/logo motion web.png";

const Header2 = () => {
    return (
        <header id="header">
            <div className="row">
                <nav className="nav-bar">
                    <div className="header__menu">
                        <NavLink to="/">
                            <img src={Logo} alt="" className="logo"/>
                        </NavLink>
                        <h1 className="logo-text">motion web </h1>
                    </div>
                </nav>
                <nav className="nav">
                    {/*<div className="roww">*/}
                    {/*    <a className="header__title__it2" href="#">Главная </a>*/}
                    {/*</div>*/}
                    <div className="btn">
                        <button className="modal-btn">
                            Заказать звонок
                        </button>
                        {/*<div className="modal_block">*/}
                        {/*    <div className="aman">*/}
                        {/*        <div className="block__box">*/}
                        {/*            <span className="close-btn">x</span>*/}
                        {/*            <div className="box__input">*/}
                        {/*                <label>*/}
                        {/*                    <input type="text" placeholder="Ваше имя"/>*/}
                        {/*                </label>*/}
                        {/*                <label>*/}
                        {/*                    <input type="text" placeholder="Город"/>*/}
                        {/*                </label>*/}

                        {/*            </div>*/}
                        {/*            <div className="box__input">*/}
                        {/*                <label>*/}
                        {/*                    <input type="number" placeholder="Телефон"/>*/}
                        {/*                </label>*/}
                        {/*                <label>*/}
                        {/*                    <input type="email" placeholder="Email"/>*/}
                        {/*                </label>*/}
                        {/*            </div>*/}
                        {/*            <label>*/}
                        {/*                <input className="input__box" type="text" placeholder="Ваш вопрос"/>*/}
                        {/*            </label>*/}
                        {/*            <button type="button" className="input__btn">*/}
                        {/*                Отправить*/}
                        {/*            </button>*/}
                        {/*            <p className="studio__desc1">Нажимая на кнопку «Отправить», я даю согласие на*/}
                        {/*                обработку*/}
                        {/*                персональных*/}
                        {/*                данных и соглашаюсь с политикой конфиденциальности</p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </nav>
            </div>
        </header>


    )
}
export default Header2