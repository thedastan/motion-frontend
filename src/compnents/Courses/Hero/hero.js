import React from 'react'
import './hero.css'
import HeroImg from './img/Group 2.png'


const Hero = () => {
    return (
        <div id="hero">
            <div className="container">
                <div className="row hero1">
                    <div className="col-lg-6 col-md-12 ">
                        <h3 className="hero--title">1 күн бекер окуп  <br/> өзүңдү сынап көр</h3>
                        <p className="hero-description">Максаттарыңызга толук ылайык келген <br/> жолду тандаңыз.</p>

                    </div>
                    <img className="col-lg-6 col-md-12" src={HeroImg} alt=""/>
                </div>
            </div>

        </div>
    )
}

export default Hero
