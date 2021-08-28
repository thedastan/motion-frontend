import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./heroM.css"
import 'react-bootstrap'
import Nasa from "../img/Subtract.png";
import Bg from "../img/bg-nasa.png";
import Pauk from "../img/Group 3.png";


const HeroM = () => {
    return (
        <section className="heroM">
            <div className="container">
                <div className="row">
                    {/*<span className="bev">B</span>*/}
                    <div className="col-lg-6 col-md-12">
                        <h1 className="main--title">MOTION WEB <br/>
                            IT СТУДИЯ</h1>
                        <p className="main-desc">
                            С нами строй будущее
                        </p>

                    </div>
                    <div className="col-lg-6 col-md-12  box-2">
                        <img className="nasa" src={Nasa} alt=""/>
                        <img className="bg-nasa" src={Bg} alt=""/>
                    </div>
                    {/*<img src={Pauk} className="img__1" alt=""/>*/}
                </div>
            </div>
        </section>

    )
}
export default HeroM