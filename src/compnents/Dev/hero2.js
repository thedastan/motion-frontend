import React from "react";
import './css/dev_style.css'
import Facebook from "./img/facebook-circular-logo.svg"
import Youtube from "./img/youtube.png"
import Vk from "./img/vk-social-logotype.png"
import Instagram from "./img/instagram.svg"
import Stat from "./img/STAT.png"
import 'react-bootstrap'

const Hero2 = () => {
    return (

        <section id="hero2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 hero-nav">
                        <div>
                            <h1 className="hero__title">Сайт с умным дизайном</h1>
                            <h3 className="hero__desc">В срок, с гарантией, для Вас</h3>
                        </div>
                        <div>
                            <button className="hero-btn">
                                Получить консультацию
                            </button>
                        </div>
                        <div>
                            <p className="hero__p">Мы не передаем данные 3-им лицам. Отправляя заявку, вы
                                соглашаетесь с политикой
                                обработки персональных данных
                            </p>
                            <div className="d-flex">
                                <img src={Facebook} className="icon" alt=""/>
                                <img src={Youtube} className="icon1" alt=""/>
                                <img src={Vk} className="icon1" alt=""/>
                                <img src={Instagram} className="icon" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="hero__img">
                            <img src={Stat} className="img" alt=""/>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}
export default Hero2