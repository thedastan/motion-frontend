import React from "react";
import Group13 from './img/Group-13.png'
import Group37 from './img/Group-37.png'
import Group36 from './img/Group-36.png'
import Tch from "./img/Tch.png"
import './css/dev_style.css'



const About2 = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-4 col-md-6 col-sm-12"
                        data-aos="fade-up"
                         data-aos-duration="1000">
                        <div className="about__block">
                            <img src={Group13} alt=""/>
                            <h1>Используем популярные CMS системы</h1></div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12"
                         data-aos="fade-up"
                         data-aos-duration="1350">
                        <div className="about__block">
                            <img src={Group37} alt=""/>
                            <h1>Адаптивный дизайн — по умолчанию</h1></div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12"
                         data-aos="fade-up"
                         data-aos-duration="1700">
                        <div className="about__block"><img src={Group36} alt=""/>
                            <h1>Настраиваем SEO для сайта</h1></div>
                    </div>
                    <div data-aos="fade-up"
                         data-aos-duration="2050">
                        <div className="about__block"><img src={Tch} alt=""/>
                            <h1>Техническая поддержка на 2 месяца бесплатно</h1></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2