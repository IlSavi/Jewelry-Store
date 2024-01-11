import React, {useContext, useState} from "react";
import { Container, Form, Image  } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { NavLink,useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import logo from '../assets/Logo.png'
import authpage from '../assets/Authpage.png'
import { login, registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { useNavigate } from "react-router-dom";


const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

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

    return (
        <Container 
            className="d-flex align-items-center justify-content-center"
            
        >
            <Row>
                <Col sm='6'>
                    <Card style={{width:550, height:'92vh'}} className="p-5 ">
                        <div className='d-flex align-items-center justify-content-center'>
                            <Image width={320} height={240} src={logo}/>
                        </div>
                        <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
                            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px',fontFamily:'Serifiqo'}}>{isLogin ? "Авторизация" : "Регистрация"}</h3>
                            <Form className="d-flex flex-column">
                                <Form.Control 
                                    className="mb-4 mx-5 w-100"
                                    style={{fontFamily:'Serifiqo'}}
                                    placeholder="Введите ваш Email"
                                    id='formControlLg' type='email' size="lg"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    
                                />
                                <Form.Control 
                                    className="mb-4 mx-5 w-100"
                                    style={{fontFamily:'Serifiqo'}}
                                    placeholder="Введите ваш пароль"
                                    id='formControlLg' type='password' size="lg"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                                    <Button 
                                        style={buttonStyle}
                                        onMouseEnter={handleHover}
                                        onMouseLeave={handleLeave}
                                        className="mb-4 px-5 mx-5 w-100"
                                        //variant="outline-success"
                                        size='lg'
                                        onClick={click}
                                    >
                                        {isLogin ? 'Войти' : 'Регистрация'}
                                    </Button>
                                    {isLogin 
                                            ?
                                                <p className='ms-5' style={{fontFamily:'Serifiqo'}}>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE} style={{textDecoration:'none', color:'#c79560'}}>Зарегистрируйся!</NavLink></p> 
                                            :
                                                <p className='ms-5' style={{fontFamily:'Serifiqo'}}>Есть аккаунт? <NavLink to={LOGIN_ROUTE} style={{textDecoration:'none', color:'#c79560'}}>Войдите!</NavLink></p>
                                    }
                            </Form>
                        </div>
                    </Card>
                </Col>
                <Col sm='6' >
                    <Image className="w-100" style={{objectFit: 'cover', objectPosition:'left', height:'92vh'}}  src={authpage}/>
                </Col>
            </Row>
        </Container>
    );
});

export default Auth;