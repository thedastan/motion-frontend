import React, {useState} from "react";
import {Modal, Button} from "react-bootstrap";
import axiosAPI from "../../../axiosAPI";


function ModalWindow2() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
                select: bid.select,
            }
            console.log(bidUser)

            axiosAPI.post('/api/enroll', bidUser);
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div>
            <Button className="center__click" variant="dark" onClick={handleShow}>
                Жазылуу
            </Button>

            <Modal className="modal-window2" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Курка катталуу үчүн төмөнкү форманы толтуруңуз </Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <div className="modal-form">
                        <input
                            onChange={(e) => valueHandler(e)}
                            type="text"
                            placeholder="Атыңыз"
                            className="modal-input"
                            id=""
                            name="name"
                        />
                        <input
                            onChange={(e) => valueHandler(e)}
                            className="modal-input"
                            type="tel"
                            id="phone"
                            name="phone"
                            mask="+996\(999) 999-9999\"
                            placeholder="+996 999 999 999"/>
                        <select className="modal-input" name="select" onChange={(e) => valueHandler(e)}>
                            <option className="form__el" selected value="javascript">JavaScript Full-Stack разработка
                            </option>
                            <option className="form__el" value="android">Android разработка</option>
                            <option className="form__el" value="ux/ui">UX/UI дизайн Pro</option>
                            <option className="form__el" value="webmaster">Веб-Мастер</option>
                            <option className="form__el" value="ux/ui+front-end">Front-End + UX/UI Дизайн</option>
                        </select>
                        <button onClick={click} className="modal-btn">Жөнөтүү</button>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalWindow2