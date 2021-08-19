import React from "react";
import {imageUrl} from "../../backendUrl";


const ServiceItem = ({item}) => {

    return (
        <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up"
             data-aos-duration="1000">
            <div className="service_block">
                <img src={`${imageUrl}${item.imageUrl}`} alt={item.title}/>
                <span>{item.title}</span>
                <h3>{item.description}</h3>
                <div className="service-bl">
                    <h3>Стоимость:</h3>
                    <p className="service_bl-p">{item.price}</p>
                </div>
                <div className="service_reg">
                    <button type="button">Заказать</button>
                </div>
            </div>
        </div>
    )
}

export default ServiceItem;