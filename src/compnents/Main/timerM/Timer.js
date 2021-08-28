import React from 'react';
import './timerM.css'
import Countdown from 'react-countdown';
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const TimerM = () => {
    return (
        <div id="timer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <h2 className="timer-title">На все курсы на этой недели 30%</h2>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="timer-box">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <h5 className="timer-text">До конца распродажи:</h5>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="timer-count">
                                        <Countdown date={Date.now() + 900000000}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default TimerM