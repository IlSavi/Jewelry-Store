import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { JEWELRY_ROUTE } from "../utils/consts";

const JewelryItem = ({jewelry}) => {
    const navigate = useNavigate();
    return (
        <Col md={3} style={{fontFamily:'Serifiqo'}} className={"mt-3"} onClick={() => navigate(JEWELRY_ROUTE +"/" + jewelry.id)}>
            <Card style={{width:150, cursor:'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + jewelry.img}/>
                <div className=" text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Цена:</div>
                    <div className="d-flex align-items-center">
                        <div>{jewelry.price} руб.</div>
                    </div>
                </div>
                <div>{jewelry.name}</div>
            </Card>
        </Col>
    );
};

export default JewelryItem