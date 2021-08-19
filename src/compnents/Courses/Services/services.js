import React, {useState} from 'react'
import './services.css'
import IT from '../Form/img/IT.svg'
import axiosAPI from "../../../axiosAPI";


const Services = () => {
    const [claim, setClaim] = useState({
        name: '',
        phone: '',
        select: 'full-stack',
        alphabet:   {
            a: 'a',
            b: 'b',
            c: 'c',
            d: 'd',
            e: 'e',
            f: 'f',
            g: 'g',
            h: 'h',
            j: 'j',
            k: 'k',
            l: 'l',
            m: 'm',
            n: 'n',
            p: 'p',
            q: 'q',
            r: 'r',
            s: 's',
            t: 't',
            v: 'v',
            w: 'w',
            x: 'x',
            y: 'y',
            z: 'z'
        }
    })

    const click = () => {
    try {
        const claimUser = {
            name: claim.name,
            phone: claim.phone,
            select: claim.select
        }
        console.log(claimUser)

        axiosAPI.post('/claim', claimUser);
    }catch (e){
        console.log(e)
    }
}

    const valueHandler = (e) => {
        setClaim({...claim, [e.target.name]: e.target.value})
    }
    return (
        <div id="feedback">
            <div className="container">
                <div className="feedback__linu"/>
                <div className="feedback">
                    <img className="feedback__icon" src={IT} alt=""/>
                        <div className="feedback__block">
                            <h1 className="title__container">Поможем в выборе!</h1>
                            <div className="feadback__blocks">
                                <div className="feedback__block1">
                                    <div className="feedback__title">
                                        <h1>Если у вас есть вопросы о формате или вы не знаете что выбрать, оставьте
                                            свой номер: мы
                                            позвоним, чтобы ответить на все ваши вопросы.</h1>
                                        <h2>Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с
                                            правилами
                                            пользования Платформы</h2>
                                    </div>
                                </div>
                                <div className="feedback__input">
                                    <form action="">
                                        <input name="name" onChange={(e) => valueHandler(e)}
                                               type="text" className="input__name" id="" placeholder="Имя "/>
                                    </form>
                                    <div className="input__btn">
                                        <form>
                                            <input name="phone" onChange={(e) => valueHandler(e)}
                                                   type="text"
                                                   className="input__tel"
                                                   id="phone"
                                                   mask="+996\(999) 999-9999\"
                                                   placeholder="+996 559 999 999"/>
                                            <div className="form-group">
                                                <select className="form__select" name="select" onChange={(e) => valueHandler(e)}>
                                                    <option className="form__el" selected value="full-stack">JavaScript Full-Stack разработка</option>
                                                    <option className="form__el" value="Android">Android разработка </option>
                                                    <option className="form__el" value="UX/UI">UX/UI дизайн Pro</option>
                                                    <option className="form__el"  value="Web-Mater">Веб-Мастер</option>
                                                    <option className="form__el" value="Front-End+UX/UI">Front-End + UX/UI Дизайн</option>
                                                </select>
                                            </div>
                                        </form>

                                        <button onClick={ click } className="btn" >Отправить</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="cot__ceti">
                            <ul>
                                <li>
                                    <a href="#">
                                        <span/>
                                        <span/>
                                        <span/>
                                        <span/>
                                        <span className="fas fa-whatsapp"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span/>
                                        <span/>
                                        <span/>
                                        <span/>
                                        <span className="fa fa-telegram"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span/>
                                        <span/>
                                        <span/>
                                        <span/>
                                        <span className="fa fa-instagram"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Services
