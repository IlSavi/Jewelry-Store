import React, { useContext, useState } from "react";
import { Context } from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate();

    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)

    }

    const [buttonStyle, setButtonStyle] = useState({
      backgroundColor: "#c79560",
      color: "white",
      padding: "10px 20px",
      borderColor:"#c79560",
      borderRadius: "5px",
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
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          fontFamily:'Serifiqo',
          transition: "background-color 0.3s, color 0.3s",
      });
    };
  
    const handleHover = () => {
      setButtonStyle({
          backgroundColor: "white",
          color: "#c79560",
          padding: "10px 20px",
          borderColor:"#c79560",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          fontFamily:'Serifiqo',
          transition: "background-color 0.3s, color 0.3s",
      });
    };
    
    return (
        <Navbar data-bs-theme="dark" style={{backgroundColor:'#c79560'}}>
        <Container>
          <NavLink style ={{color:'white', textDecoration:'none', fontWeight:'bold', letterSpacing:'5px'}} to={SHOP_ROUTE}>
            GOLDEN HEART <br/> <span style={{fontSize:'10px', fontWeight:'lighter', letterSpacing:'8px',marginLeft:'45px'}}>JEWELRY</span>
          </NavLink>
          {user.isAuth ?
          <Nav className="ml-auto" style={{color:'white'}}>
            <Button 
                onClick={() => navigate(ADMIN_ROUTE)}
                style={{ backgroundColor: "#c79560",
                color: "white",
                padding: "10px 20px",
                borderColor:"#c79560",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
                fontFamily:'Serifiqo',
                transition: "background-color 0.3s, color 0.3s",}}
                
            >
                Админ панель
            </Button>
            <Button 
                onClick={() => logOut()}//navigate(LOGIN_ROUTE)} 
                className="ml-2" 
                style={buttonStyle}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
                >
                    Выйти
            </Button>
          </Nav>
          :
          <Nav className="ml-auto" style={{color:'white'}}>
            <Button 
            onClick={() => navigate(LOGIN_ROUTE)}
            className="ml-2" 
            style={buttonStyle}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            >
              Авторизация
            </Button>
          </Nav>
          }
        </Container>
      </Navbar>
    );
});

export default NavBar