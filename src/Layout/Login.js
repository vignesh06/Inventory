import React, { useState, useEffect } from 'react';
import HTTPService from '../Services/HTTPService';
import { UrlConstant, localstorageConstants } from '../Constants/Constants';
import labels from '../Constants/labels';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import InputElement from '../Components/FormElements/inputElement'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Login(props) {
  const [username, setuserName] = useState('');
  const [password, setpassword] = useState('');
  useEffect(() => {
    logout()
  }, []);
  const logout = () => {
    localStorage.setItem(
      localstorageConstants.IsLoggedIn,
    false)
  }
  //function to Login 
  const login = async () => {
    let url = UrlConstant.Ip + UrlConstant.login
    let data={"username":username,"password":password}
    let responsedata=await HTTPService(url, 'post',data)
    localStorage.setItem(
      localstorageConstants.Token,responsedata.jwt
    )
    localStorage.setItem(
      localstorageConstants.IsLoggedIn,true
    )
    props.history.push("/admin")
  }
  return (
    <React.Fragment>
      <Container>
        <br />
        <Row>
          <Col md={12} lg={12} sm={12} xs={12}>
            <h2>Inventory Login</h2>
          </Col>
        </Row>
        <Row>
          <Col md={4} lg={4} sm={6} xs={6}>
            <InputElement type={'text'} inputChangeHandler={(e) => setuserName(e.target.value)} label={''} inputValue={username} inputPlaceHolder={'User name'}></InputElement>
          </Col>

        </Row>
        <Row>
          <Col md={4} lg={4} sm={6} xs={6}>
            <InputElement type={'password'} inputChangeHandler={(e) => setpassword(e.target.value)} label={''} inputValue={password} inputPlaceHolder={'Password'}></InputElement>
          </Col>
        </Row>
        <Row>
          <Col md={6} lg={6} sm={6} xs={6}>
            <br />
            <Button variant="primary" onClick={()=>login()} size="md" disabled={!(username && password)}>{labels.login.lbl_Login_button}</Button> <br /> <br />
            <p className="mb-2 text-muted">Forgot password? <Link to="/forgotpassword">Reset</Link></p> <br />
            <p className="mb-0 text-muted">Don’t have an account? <Link to="/signup">Signup</Link></p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
export default Login;
