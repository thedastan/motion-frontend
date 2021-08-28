import React from "react";
import './heroD.css'
import Facebook from "../img/facebook-circular-logo.svg"
import Youtube from "../img/youtube.png"
import Vk from "../img/vk-social-logotype.png"
import Instagram from "../img/instagram.svg"
import Stat from "../img/STAT.png"
import 'react-bootstrap'
import { Link, animateScroll as scroll } from "react-scroll";
// import {Link } from "react-router-dom";
import RequestD from "../RequestD/requestD";

const HeroD = () => {

    return (
        <section id="heroD">
            <div className="container">
                <div className="row hero-row">
                    <div className="col-lg-5 col-md-12 hero-nav">
                        <div>
                            <h1 className="hero__titleD">Сайт с умным дизайном</h1>
                            <h3 className="hero__descD">В срок, с гарантией, для Вас</h3>
                        </div>
                        <div>
                            <Link smooth={true} to="requestD" className="hero-btnD">
                                Получить консультацию
                            </Link>
                        </div>
                        <div>
                            <p className="hero__p">Мы не передаем данные 3-им лицам. Отправляя заявку, вы
                                соглашаетесь с политикой
                                обработки персональных данных
                            </p>
                            <div className="d-flex">
                                <a href="#"><img src={Facebook} className="hero__icon" alt=""/></a>
                                <a href="https://www.youtube.com/channel/UCO3609q78G8v8pC0Wp6hgow/featured"><img src={Youtube} className="hero__icon1" alt=""/></a>
                                <a href="#"><img src={Vk} className="hero__icon1" alt=""/></a>
                                <a href="https://www.instagram.com/motion.web_projects/"><img src={Instagram} className="hero__icon" alt=""/> </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div className="hero__img">
                            <img src={Stat} className="hero__imgD" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HeroD
