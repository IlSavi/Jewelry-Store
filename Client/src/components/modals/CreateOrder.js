import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, useParams } from 'react-router-dom';
import { fetchOneJewelry } from '../../http/jewelryAPI';
import { Card, Col, Image, Row } from 'react-bootstrap';

function CreateOrder(props) {
    const [jewelry, setJewelry] = useState({info:[]})
    const {id} = useParams()

    const [buttonStyle, setButtonStyle] = useState({
        backgroundColor: "white",
        color: "#c79560",
        padding: "10px 20px",
        borderColor:"#c79560",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "18px",
        fontFamily:'Serifiqo',
        transition: "background-color 0.3s, color 0.3s",
      });
    
      const handleHover = () => {
        setButtonStyle({
            backgroundColor: "#c79560",
            color: "white",
            padding: "10px 20px",
            borderColor:"#c79560",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "18px",
            fontFamily:'Serifiqo',
            transition: "background-color 0.3s, color 0.3s",
        });
      };
    
      const handleLeave = () => {
        setButtonStyle({
            backgroundColor: "white",
            color: "#c79560",
            padding: "10px 20px",
            borderColor:"#c79560",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "18px",
            fontFamily:'Serifiqo',
            transition: "background-color 0.3s, color 0.3s",
        });
      };

    useEffect(()=> {
        fetchOneJewelry(id).then(data => setJewelry(data))
    }, [])
  
    return (
    
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{fontFamily: "Serifiqo"}}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Заказ
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
            <Row>
                <Col>
                    <Card className='d-flex align-items-center justify-content-center' style={{border:'5px solid #c79560'}}>
                        <h5>{jewelry.name}</h5>
                        <Image style={{marginLeft:'5px', marginTop:'5px'}} width={233} height={233} src={process.env.REACT_APP_API_URL + jewelry.img}/> 
                    </Card> 
                    <div>
                        <p class="dis fw-bold mb-1">Email адрес</p>
                        <input class="form-control mb-2" type="email" placeholder="Введите ваш email"></input>
                        <p class="dis fw-bold mb-1">Адрес доставки</p>
                            <input class="form-control zip mb-1" type="text" placeholder="Улица"></input>
                            <div class="d-flex">
                                <input class="form-control zip" type="text" placeholder="Квартира"></input>
                                <input class="form-control state" type="text" placeholder="Город"></input>
                            </div>
                    </div>
                </Col>

                <Col>
                    <h5 class='fw-bold'>Детали оплаты</h5>
                    <p>
                        Завершите Вашу покупку, введя свой платежные данные
                    </p>
                     
                    <div>
                        <p class="dis fw-bold mb-1">Данные карты</p>
                        <div class="d-flex align-items-center justify-content-between card-atm border rounded">
                            <div class="fab fa-cc-visa ps-3"></div>
                            <input type="text" class="form-control" placeholder="Номер карты"></input>
                            <div class="d-flex w-50">
                                <input type="text" maxlength={5} class="form-control px-0 " placeholder="MM/YY"></input>
                                <input type="password" maxlength={3} class="form-control px-0" placeholder="CVV"></input>
                            </div>
                        </div>
                        <div class="my-3 cardname">
                            <p class="dis fw-bold mb-1">Носитель карты</p>
                            <input class="form-control" type="text" placeholder="ИМЯ ФАМИЛИЯ"></input>
                        </div>
                        <div class="address">
                            
                            <div class="d-flex flex-column dis">
                                <div class="d-flex align-items-center justify-content-between ">
                                    <p>Цена:</p>
                                    <p><span class="fas fa-dollar-sign"></span>{jewelry.price}</p>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <p>Доставка:</p>
                                    <p><span class="fas fa-dollar-sign"></span>50</p>
                                </div>
                                <div class="d-flex align-items-center justify-content-between mb-4">
                                    <p class="fw-bold">К оплате:</p>
                                    <p class="fw-bold"><span class="fas fa-dollar-sign"></span>{jewelry.price+50}</p>
                                </div>
                                <div class="btn btn-primary mt-2 " 
                                        style={buttonStyle}
                                        onMouseEnter={handleHover}
                                        onMouseLeave={handleLeave}>
                                            Оплатить: 
                                    <span class="fas fa-dollar-sign px-1"></span>{jewelry.price+50}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </Col>
            </Row>
        
        
        
      </Modal.Body>

    </Modal>
  );
}

export default CreateOrder;