import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Col,Row} from "react-bootstrap";
import { Context } from "..";

const MaterialBar = observer(() => {
    const{jewelry} = useContext(Context)
    const activeStyle = {
        cursor: 'pointer', 
        width: '100px', 
        margin: '10px',
        textAlign:'center',
        color: 'white',
        backgroundColor: '#c79560',
        fontFamily:'Serifiqo',
    }
    const nonActiveStyle = {
        cursor: 'pointer', 
        width: '100px', 
        margin: '10px',
        textAlign:'center',
        color: '#c79560',
        fontFamily:'Serifiqo',
    }
    return (
        <Row className="d-flex">
            <Col className="d-flex flex-wrap">
                {jewelry.materials.map((material) => (
                    <Card
                        style={material.id === jewelry.selectedMaterial.id ? activeStyle : nonActiveStyle}
                        key={material.id}
                        className="p-3"
                        onClick={() => jewelry.setSelectedMaterial(material)}
                        border={material.id === jewelry.selectedMaterial.id ? '#c79560' : 'light'}
                    >
                        {material.name}
                    </Card>
                ))}
            </Col>
        </Row>
    );
});

export default MaterialBar