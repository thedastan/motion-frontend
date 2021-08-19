import Money from './img/money.png'
import ModalWindow2 from "./Modal2";
import ModalWindow from "./Modal1";
import {imageUrl} from "../../../backendUrl"


const CourseItem = ({el}) => {
    return (
        <div className=" col-lg-6 col-md-12 col-sm-12">
            <div className="card">
                <div className="puzyr__1"/>
                <div className="win">
                    <img className="img1" src={`${imageUrl}${el.imageUrl}`} alt=""/>
                    <div className="shadow1"/>
                </div>
                <div className="puzyr__2"/>
                <div className="title">
                    <h3>Курс</h3>
                    <h1>{el.courseName}</h1>
                </div>
                <div className="card2">
                    <h1>{el.coursePrice} <span>сом/айына.</span></h1>
                    <h3>{el.courseDiscount}</h3>
                    <p>{el.courseDesc}</p>
                    <img src={Money} alt=""/>
                </div>
                <div className="puzyr__3"/>
                <div className="buttons">
                    <ModalWindow el={el}/>
                    <ModalWindow2/>
                </div>
            </div>
        </div>
    )
}
export default CourseItem