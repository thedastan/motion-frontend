import React, { useState } from 'react'
import './form.css'
import IT from './img/IT.svg';
import axiosAPI from '../../../axiosAPI';


const Form = () => {

    const [bid, setBid] = useState({
        name: '',
        phone: '',
        select: 'javascript',

    })

    const valueHandler = (e) => {
        setBid({...bid, [e.target.name]: e.target.value})
    }

    const click = () => {
        try {
            const bidUser = {
                name: bid.name,
                phone: bid.phone,
                select: bid.select
            }
            console.log(bidUser)

            axiosAPI.post('/bid', bidUser);
        }catch (e){
            console.log(e)
        }
    }

    return (
        <div id="form">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="form__box">
                            <div className="form__header">
                                <img src={IT} className="form__img" alt=""/>
                                <legend className="form__title">Заманбап кесиптин ээси болгүң келеби?</legend>
                                <p className="form__description">Бул  жөнүндө көбүрөөк билгиңиз келсе?
                                    Билдирүү жөнөтүңүз жана
                                    биз сиз менен байланышабыз</p>
                            </div>
                            <div className="form-group">
                                <input name="name" onChange={(e) => valueHandler(e)}
                                       type="text" className="form-control" id="" placeholder="Атыңыз "/>
                            </div>
                            <div className="form-group">
                                <input name="phone" onChange={(e) => valueHandler(e)}
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    mask="+996\(999) 999-9999\"
                                    placeholder="+996 999 999 999"/>
                            </div>

                            <div className="form-group">
                                <select className="form__select" name="select" onChange={(e) => valueHandler(e)}>
                                    <option className="form__el" selected value="javascript">JavaScript Full-Stack разработка</option>
                                    <option className="form__el" value="android">Android разработка </option>
                                    <option className="form__el" value="ux/ui">UX/UI дизайн Pro</option>
                                    <option className="form__el"  value="webmaster">Веб-Мастер </option>
                                    <option className="form__el" value="ux/ui+front-end">Front-End + UX/UI Дизайн</option>
                                </select>
                            </div>
                            <button onClick={ click } className="form__btn">Жөнөтүү</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
