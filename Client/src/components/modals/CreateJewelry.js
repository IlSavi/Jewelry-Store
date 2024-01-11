import React, { useContext, useEffect, useState } from "react";
import {Modal,Form, Button, Dropdown, Row, Col} from "react-bootstrap";
import { Context } from "../../index";
import { createJewelry, fetchMaterials, fetchTypes } from "../../http/jewelryAPI";
import { observer } from "mobx-react-lite";

const CreateJewelry = observer(({show, onHide}) => {
    const{jewelry} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])
    
    useEffect(() => {
        fetchTypes().then(data => jewelry.setTypes(data))
        fetchMaterials().then(data => jewelry.setMaterials(data))
    }, [])
    
    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addJewelry = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('materialId', jewelry.selectedMaterial.id)
        formData.append('typeId', jewelry.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createJewelry(formData).then(data => onHide())
    }

    const [buttonStyle, setButtonStyle] = useState(getButtonStyle());
  
    function getButtonStyle() {
      return {
        backgroundColor: "white",
        color: "#c79560",
        padding: "10px 20px",
        borderColor: "#c79560",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "18px",
        fontFamily: "Serifiqo",
        transition: "background-color 0.3s, color 0.3s",
      };
    }
  
    const handleHover = (setButtonStyle) => {
      setButtonStyle({
        backgroundColor: "#c79560",
        color: "white",
        padding: "10px 20px",
        borderColor: "#c79560",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "18px",
        fontFamily: "Serifiqo",
        transition: "background-color 0.3s, color 0.3s",
      });
    };
  
    const handleLeave = (setButtonStyle) => {
      setButtonStyle(getButtonStyle());
    };

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
                Добавить изделие
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
               <Dropdown className="mb-2">
                    <Dropdown.Toggle style={{backgroundColor:'#c79560', border:'none'}}>{jewelry.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {jewelry.types.map(type =>
                            <Dropdown.Item 
                                onClick={() => jewelry.setSelectedType(type)} 
                                key={type.id}
                            >
                                {type.name}
                            </Dropdown.Item>    
                        )}
                    </Dropdown.Menu> 
               </Dropdown>
               <Dropdown>
                    <Dropdown.Toggle style={{backgroundColor:'#c79560', border:'none'}}>{jewelry.selectedMaterial.name || "Выберите материал"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {jewelry.materials.map(material =>
                            <Dropdown.Item 
                                onClick={() => jewelry.setSelectedMaterial(material)} 
                                key={material.id}
                            >
                                {material.name}
                            </Dropdown.Item>    
                        )}
                    </Dropdown.Menu>
               </Dropdown>
               <Form.Control
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="mt-3"
                    placeholder="Введите название изделия"
               />
               <Form.Control
                    value={price}
                    onChange={e => setPrice(Number(e.target.value))}
                    className="mt-3"
                    placeholder="Введите стоимость изделия"
                    type="number"
               />
               <Form.Control
                    className="mt-3"
                    type="file"
                    onChange={selectFile}
               />
               <hr/>
               <Button
                style={buttonStyle}
                onMouseEnter={() => handleHover(setButtonStyle)}
                onMouseLeave={() => handleLeave(setButtonStyle)}
                onClick={addInfo}
               >
                    Добавить новое свойство
                </Button>
                {info.map(i => 
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Введите название свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder="Введите описание свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    variant="outline-danger"
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                )}
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addJewelry}>Добавить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
      </Modal>
    );
});

export default CreateJewelry;