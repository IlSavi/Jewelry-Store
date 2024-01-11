import React, { useState } from "react";
import {Modal, Button, Form} from "react-bootstrap";
import { createMaterial } from "../../http/jewelryAPI";

const CreateMaterial = ({show, onHide}) => {
    
    const [value, setValue] = useState('')
    const addMaterial = () => {
        createMaterial({name: value}).then(data => {
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
                Добавить материал
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Control
                    value = {value}
                    onChange={e => setValue(e.target.value)}
                    placeholder={"Введите название материала"}
                />
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addMaterial}>Добавить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
      </Modal>
    );
};

export default CreateMaterial