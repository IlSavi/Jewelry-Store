  import React,{useState} from 'react';
import { Button, Container,Card } from "react-bootstrap";
import CreateMaterial from "../components/modals/CreateMaterial";
import CreateType from "../components/modals/CreateType";
import CreateJewelry from "../components/modals/CreateJewelry";

const Admin = () => {
    const[materialVisible, setMaterialVisible] = useState(false)
    const[typelVisible, setTypeVisible] = useState(false)
    const[jewelryVisible, setJewelryVisible] = useState(false)
    
    const [button1Style, setButton1Style] = useState(getButtonStyle());
    const [button2Style, setButton2Style] = useState(getButtonStyle());
    const [button3Style, setButton3Style] = useState(getButtonStyle());
  
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
    <>
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <Card style={{width:550}} className="p-5 mt-5">
            <Button 
                className="p-2"
                style={button1Style}
                onMouseEnter={() => handleHover(setButton1Style)}
                onMouseLeave={() => handleLeave(setButton1Style)}
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button 
                className="mt-4 p-2"
                style={button2Style}
                onMouseEnter={() => handleHover(setButton2Style)}
                onMouseLeave={() => handleLeave(setButton2Style)}
                onClick={() => setMaterialVisible(true)}
            >
                Добавить материал
            </Button>
            <Button 
                className="mt-4 p-2"
                style={button3Style}
                onMouseEnter={() => handleHover(setButton3Style)}
                onMouseLeave={() => handleLeave(setButton3Style)}
                onClick={() => setJewelryVisible(true)}
            >
                Добавить изделие
            </Button>
        </Card>
      </Container>

      <CreateType
        show={typelVisible}
        onHide={() => setTypeVisible(false)}
      />
      <CreateMaterial
        show={materialVisible}
        onHide={() => setMaterialVisible(false)}
      />
      <CreateJewelry
        show={jewelryVisible}
        onHide={() => setJewelryVisible(false)}
      />
    </>
  );
};

export default Admin;
/*
import React,{useState} from "react";
import { Button, Card, Container} from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateMaterial from "../components/modals/CreateMaterial";
import CreateJewelry from "../components/modals/CreateJewelry";

const Admin = () => {
    const[materialVisible, setMaterialVisible] = useState(false)
    const[typelVisible, setTypeVisible] = useState(false)
    const[jewelryVisible, setJewelryVisible] = useState(false)

    const [button1Style, setButton1Style] = useState(getButtonStyle());
    const [button2Style, setButton2Style] = useState(getButtonStyle());
    const [button3Style, setButton3Style] = useState(getButtonStyle());
  
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
        <Container className="d-flex flex-column align-items-center justify-content-center">
            <Card style={{width:550}} className="p-5 mt-5">
                <Button
                    style={button1Style}
                    onMouseEnter={() => handleHover(setButton1Style)}
                    onMouseLeave={() => handleLeave(setButton1Style)}
                    onClick={() => setTypeVisible(true)}
                >
                    Добавить тип
                </Button>
                <Button
                    className="mt-4"
                    style={button2Style}
                    onMouseEnter={() => handleHover(setButton2Style)}
                    onMouseLeave={() => handleLeave(setButton2Style)}
                    onClick={() => setMaterialVisible(true)}
                >
                    Добавить материал
                </Button>
                <Button
                    className="mt-4"
                    style={button3Style}
                    onMouseEnter={() => handleHover(setButton3Style)}
                    onMouseLeave={() => handleLeave(setButton3Style)}
                    onClick={() => setJewelryVisible(true)}
                >
                    Добавить изделие
                </Button>
                <CreateType show={typelVisible} onHide={() => setTypeVisible(false)} />
                <CreateMaterial show={materialVisible} onHide={() => setMaterialVisible(false)} />
                <CreateJewelry show={jewelryVisible} onHide={() => setJewelryVisible(false)} />
            </Card>
            
        </Container>
    );
};

export default Admin
*/