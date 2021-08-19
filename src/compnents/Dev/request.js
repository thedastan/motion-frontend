import React, { useState } from 'react';
import axiosAPI from "../../axiosAPI";


const Request = () => {
    const [reqs, setReqs] = useState({
        name: '',
        phone: '',
        select: 'website development',

    })

    const valueHandler = (e) => {
        setReqs({...reqs, [e.target.name]: e.target.value})
    }

    const click = () => {
        try {
            const reqUser = {
                name: reqs.name,
                phone: reqs.phone,
                select: reqs.select
            }
            console.log(reqUser)

            axiosAPI.post('/api/enroll/reqs', reqUser);
        }catch (e){
            console.log(e)
        }
    }
  return (
      <section id="request">
          <div className="container">
              <div className="row">
                  <div className="col-lg-6">
                      <h1 className="works__title">Оставьте вашу заявку</h1>
                      <p className="studio__desc">Мы с удовольствием ответим на все Ваши вопросы и проведем необходимые
                          уточнения.
                          В случае, если Вы не найдете ответы на Ваши вопросы на нашем сайте, просмотрите раздел FAQ или
                          обратитесь непосредственно к нам.</p>
                  </div>
                  <div className="col-lg-6">
                      <div className="block__box">
                          <div className="box__input">
                              <label>
                                  <input type="text" id="" name="name" placeholder="Ваше имя" onChange={(e) => valueHandler(e)}/>
                              </label>

                          </div>
                          <div className="box__input">
                              <label>
                                  <input type="tel" id="" name="phone" placeholder="+996 559 69 26 26" onChange={(e) => valueHandler(e)}/>
                              </label>

                          </div>
                          <div className="form-req">
                              <select className="req__select" id="" name="select" onChange={(e) => valueHandler(e)}>
                                  <option className="form__el" selected value="website development"> Разработка сайта</option>
                                  <option className="form__el" value="Mobile development"> Разработка мобильных приложений </option>
                                  <option className="form__el" value="Web development">Разработка веб приложений</option>
                                  <option className="form__el"  value="Design">Разработка дизайна</option>
                                  <option className="form__el" value="Business automation">Автоматизация бизнес процессов</option>
                              </select>
                          </div>
                          <button type="button" className="input__btn" onClick={ click }>
                              Отправить
                          </button>
                          <p className="studio__desc1">Нажимая на кнопку «Отправить», я даю согласие на обработку
                              персональных
                              данных и соглашаюсь с политикой конфиденциальности</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}
export default Request