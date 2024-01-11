import React, { useState } from "react";
import {Modal, Button, Form} from "react-bootstrap";
import { createType } from "../../http/jewelryAPI";

const CreateType = ({show, onHide}) => {
    const [value, setValue] = useState('')
    
    const addType = () => {
        createType({name: value}).then(data => {
            setValue('')
           // props.onHide()
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
            style={{fontFamily: "Serifiqo"}}
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Добавить тип
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Control
                    value = {value}
                    onChange={e => setValue(e.target.value)}
                    placeholder={"Введите название типа"}
                />
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addType}>Добавить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
      </Modal>
    );
};

export default CreateType