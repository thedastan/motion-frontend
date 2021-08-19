import React, {useState} from "react";
import {Modal, Button} from "react-bootstrap";
import Modal2 from "./Modal2";
import {imageUrl} from "../../../backendUrl";


function ModalWindow({el}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="dark" onClick={handleShow}>
                Тоолук маалымат
            </Button>
            <Modal show={ show } onHide={ handleClose } key={ el.id }>
                <Modal.Header closeButton>
                    <Modal.Title>{el.courseName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="content1__desk">
                        <div className="content1__title">
                            <ul className="window--row">
                                <li><h4 className="window-title">Курстун узактыгы: <span
                                    className="window-span">{el.courseTime}</span></h4></li>
                                <li><h4 className="window-title">График: <span
                                    className="window-span">{el.schedule}</span></h4></li>
                            </ul>
                        </div>
                        <div className="content1__img">
                            <div className="content1__line1"/>
                        </div>
                    </div>
                    <div className="program">
                        <h3 className="program--title"> Инструменттер</h3>
                        <div className="program__img">
                            <img src={`${imageUrl}${el.tools}`} alt="" className="imgUrl"/>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Modal2/>
                </Modal.Footer>
            </Modal>


        </div>
    );
}

export default ModalWindow