import React from 'react';
import Ani from '../img/ani.png'

const StudioD = () => {
    return (
        <section id="studio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="works__title">Про IT студию</h1>
                        <p className="studio__desc"> У всех людей разные вкусы и свое видение прекрасного. Кто-то любит
                            яркие краски
                            и броский, веселый дизайн. Кто-то – наоборот, спокойные,
                            пастельные тона и строгий деловой стиль. И от того, насколько точно
                            удастся определить желания заказчика, зависит успех всего проекта.
                            Поэтому главными принципами нашей работы являются:
                            терпение, понимание и уважение к нашим клиентам.</p>
                    </div>
                    <div className="col-lg-6">
                        <img className="studio__img" src={Ani} alt=""/>
                    </div>
                </div>
            </div>

        </section>
)
}
export default StudioD