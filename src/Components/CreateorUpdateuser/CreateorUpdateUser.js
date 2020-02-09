import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import InputElement from '../FormElements/inputElement'
import {UrlConstant,localstorageConstants} from '../../Constants/Constants';
import HTTPService from '../../Services/HTTPService';
import SelectElement from '../FormElements/select'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom';

function CreateorUpdateUser(props) {
  const [roleList, setroleList] = useState([]);
  const [departmentlist, setdepartmentlist] = useState([]);
  const getdata=async () => {
    let url = UrlConstant.Ip + UrlConstant.getroleList
    let urldepartmentList = UrlConstant.Ip + UrlConstant.departmentList
    setroleList(await HTTPService(url, 'get', ''))
    setdepartmentlist(await HTTPService(urldepartmentList, 'get', ''))
  }
  useEffect( () => {
    getdata()
  }, []);
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md={4} lg={4} sm={6} xs={6}>
            <InputElement mandatory={true} type={'text'} inputChangeHandler={(e) => props.setUserFormData(e,'userId')} label={'User Id'} inputValue={props.userform.userId} inputPlaceHolder={'User ID'} disable={props.disableUserId}></InputElement>
          </Col>
          <Col md={4} lg={4} sm={6} xs={6}>
            <InputElement type={'text'} inputChangeHandler={(e) =>  props.setUserFormData(e,'name')} label={'Name'} inputValue={props.userform.name} inputPlaceHolder={'Name'}></InputElement>
          </Col>
          <Col md={4} lg={4} sm={6} xs={6}>
            <SelectElement mandatory={true} selectChangeHandler={(e) =>  props.setUserFormData(e,'role')} label={'Role'} inputValue={props.userform.role} dropdownList={roleList}></SelectElement>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={4} lg={4} sm={6} xs={6}>
            <SelectElement mandatory={true} selectChangeHandler={(e) => props.setUserFormData(e,'department')} label={'Department'} inputValue={props.userform.department} dropdownList={departmentlist}></SelectElement>
          </Col>
          <Col md={4} lg={4} sm={6} xs={6}>
            <InputElement type={'text'} inputChangeHandler={(e) => props.setUserFormData(e,'contactNumber')} label={'Contact number'} inputValue={props.userform.contactNumber} inputPlaceHolder={'Contact number'}></InputElement>
          </Col>
          <Col md={4} lg={4} sm={6} xs={6}>
            <InputElement type={'email'} inputChangeHandler={(e) => props.setUserFormData(e,'email')} label={'Email'} inputValue={props.userform.email} inputPlaceHolder={'Email'}></InputElement>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={4} lg={4} sm={6} xs={6}>
            <InputElement mandatory={true} type={'text'} inputChangeHandler={(e) => props.setUserFormData(e,'displayname')} label={'Display Name'} inputValue={props.userform.displayname} inputPlaceHolder={'Display Name'}></InputElement>
          </Col>
        </Row>
        <br />
      </Container>
    </React.Fragment>
  );
}

export default CreateorUpdateUser;
