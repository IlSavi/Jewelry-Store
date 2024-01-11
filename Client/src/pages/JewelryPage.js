import React,{useEffect, useState} from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import {useParams} from 'react-router-dom';
import { fetchOneJewelry } from "../http/jewelryAPI";
import CreateOrder from "../components/modals/CreateOrder";

const JewelryPage = () => {
    const [jewelry, setJewelry] = useState({info:[]})
    const {id} = useParams()
    

    useEffect(()=> {
        fetchOneJewelry(id).then(data => setJewelry(data))
    }, [])

    const text ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    const [orderShow, setOrderShow] = React.useState(false);

    const [buttonStyle, setButtonStyle] = useState({
        backgroundColor: "#c79560",
        color: "white",
        padding: "10px 20px",
        borderColor:"#c79560",
        cursor: "pointer",
        fontSize: "16px",
        fontFamily:'Serifiqo',
        transition: "background-color 0.3s, color 0.3s",
      });
    
      const handleLeave = () => {
        setButtonStyle({
            backgroundColor: "#c79560",
            color: "white",
            padding: "10px 20px",
            borderColor:"#c79560",
            cursor: "pointer",
            fontSize: "16px",
            fontFamily:'Serifiqo',
            transition: "background-color 0.3s, color 0.3s",
        });
      };
    
      const handleHover = () => {
        setButtonStyle({
            backgroundColor: "#c79560",
            color: "white",
            padding: "10px 20px",
            borderColor:"white",
            borderRadius: "100px",
            cursor: "pointer",
            fontSize: "16px",
            fontFamily:'Serifiqo',
            transition: "background-color 0.3s, color 0.3s",
        });
      };
    return (
        <Container className="mt-3">
            <Card
                style={{border:'5px solid #c79560',width:'97.5%'}}
            >
                <Row>
                    <Col md={4}>
                        <Image style={{marginLeft:'5px', marginTop:'5px'}} width={300} height={300} src={process.env.REACT_APP_API_URL + jewelry.img}/>
                    </Col>
                    <Col md={4}>
                        <Row className="d-flex flex-column align-items-center ">
                            <h2 style={{fontFamily:'Serifiqo'}}>{jewelry.name}</h2>
                            <div style={{textAlign:'justify',fontFamily:'Serifiqo'}}>
                            {text}
                            </div>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Card
                            className="d-flex flex-column align-items-center justify-content-around"
                            style={{width:300, height:90, fontSize:32, border:'5px solid #c79560',marginTop:'20%',backgroundColor:'#c79560',borderRadius:'100px'}}
                        >
                            <h3 style={{color:'white',fontFamily:'Serifiqo'}}>{jewelry.price} руб.</h3>
                            <Button 
                                style={buttonStyle}
                                onMouseEnter={handleHover}
                                onMouseLeave={handleLeave}
                                onClick={() => setOrderShow(true)}
                            >
                                Купить
                            </Button>
                            <CreateOrder
                                show={orderShow}
                                onHide={() => setOrderShow(false)}
                            />
                        </Card>
                    </Col>
                </Row> 
            </Card>
            <Row className="d-flex flex-column m-3">
                <h1 style={{marginLeft:'-24px', fontFamily:'Serifiqo'}}>Характеристики:</h1>
                {jewelry.info.map((info,index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? '#ecbe8d' : 'transparent', padding:10,
                                               color: index % 2 === 0 ? 'white' : 'black',fontFamily:'Serifiqo'}}>
                        {info.title}: {info.description}
                    </Row>    
                )}
            </Row>
        </Container>
    );
};

export default JewelryPage