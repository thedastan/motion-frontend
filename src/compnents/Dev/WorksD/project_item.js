import React from 'react'
import 'react-bootstrap'
import { imageUrl } from "../../../backendUrl";


const Project_item = ({ item}) => {


    return (

        <div className="col-lg-4 col-md-6 col-sm-12  baz__block" style={
            {
                background: `url(${imageUrl}${item.imageUrl}) no-repeat center/cover`,


            }
        } >
            <div className="baz__box">
                <h1 className="baz__title">{item.title}</h1>
                <p className="baz__desc">{item.description}</p>
                <a href={item.link} className="baz__input">
                   Подробнее
                </a>
            </div>
        </div>
    )


}

export default Project_item