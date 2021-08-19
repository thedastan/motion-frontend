import React from 'react';
import {NavLink} from "react-router-dom";
import Facebook from "./img/facebook-circular-logo.svg"
import Youtube from "./img/youtube.png"
import Vk from "./img/vk-social-logotype.png"
import Instagram from "./img/instagram.svg"

const Footer2 = () => {
    return (
        <section id="footer">
            <div className="container">

                <div className="row footer__center__row ">
                    <div className="first__block  col-lg-3 col-md-4 col-sm-12" >
                        <div className="first__block__top">
                            <h4>2021</h4>
                            <h3>IT-Студия Motion Web LLC</h3>
                        </div>
                        <div className="first__block__center">
                            <ul>
                                <li>
                                    <a href="https://go.2gis.com/4dihq">
                                        <i className="fas fa-map-marker-alt m-lg-2"/>
                                        г. Бишкек, Турусбекова 109/3 </a>
                                </li>
                                <li>
                                    <a href="tel:+996 559 69 26 26">
                                        <i className="fas fa-phone-sign m-lg-2"/> +996 559 69 26 26</a>
                                </li>
                                <li>
                                    <a href="mailto:motionweb312@gmail.com"> <i
                                        className="far fa-envelope m-lg-2"/> motionweb312@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex">
                            <img src={Facebook} className="icon" alt=""/>
                            <img src={Youtube} className="icon1" alt=""/>
                            <img src={Vk} className="icon1" alt=""/>
                            <img src={Instagram} className="icon" alt=""/>
                        </div>
                    </div>
                    <div className="second__block col-lg-3 col-md-4 col-sm-12">
                        <ul>
                            <li>
                                <NavLink to="#" className="ak">Главная</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="http://localhost:63342/choose/index_y.html?_ijt=v5l2ddq84p1mtvm0u1fnipa82g"
                                    className="ak1">Разработка сайта</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="http://localhost:63342/choose/index_us.html?_ijt=e64ctr1alube54v59mmaicjrs9"
                                    className="ak1">Услуги</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="http://localhost:63342/choose/index_port.html?_ijt=5linosglllaljqshbu6n583fi9"
                                    className="ak1">Портфолио</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="http://localhost:63342/choose/index_baza.html?_ijt=5linosglllaljqshbu6n583fi9"
                                    className="ak1">База знаний</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="http://localhost:63342/choose/index_ak.html?_ijt=e64ctr1alube54v59mmaicjrs9"
                                    className="ak1">Акции</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="third__block col-lg-3 col-md-4 col-sm-12">
                        <ul>
                            <li>
                                <NavLink to="#" className="ak1">Разработка Логотипа</NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="ak1">Логотип и фирменный стиль</NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="ak1">Интернет-магазин</NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="ak1">Сайт-каталог</NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="ak1">Сайт-визитка</NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="ak1">Контекстная реклама</NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="ak1">Продвижение сайтов</NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="ak1">Поддержка сайтов</NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="ak1">Наполнение контентом</NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="ak1">Готовые решения</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="fourth__block col-lg-3 col-md-4 col-sm-12">
                        <ul>
                            <li>
                                <NavLink to="#" className="ak1">Контакты</NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="ak1">Вакансии</NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="ak1">Акции</NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="ak1">Цены</NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="ak1">Оплата логотипа</NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="ak1">Онлайн школа</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__bottom  ">
                    <span>Motion Web LLC. 2021 © Все права защищены</span>
                </div>
            </div>
        </section>
    )
}
export default Footer2