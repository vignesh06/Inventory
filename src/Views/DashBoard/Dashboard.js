import React, { useState, useEffect } from 'react';
import CustomTable from '../../Components/Table/CustomTable';
import HTTPService from '../../Services/HTTPService';
import {UrlConstant,localstorageConstants} from '../../Constants/Constants';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import InputElement from '../../Components/FormElements/inputElement'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

function Dashboard(props) {
  const [tableConfig, settableConfig] = useState([]);
  const [tabelData, settabelData] = useState([]);
  const [filterValue, setfilterValue] = useState('');
  useEffect( () => {
    async function fetchData() {
      let url = UrlConstant.Ip + UrlConstant.tableData
      settabelData(await HTTPService(url, 'get', ''))
      let tabelColumnn = [
        { title: 'ID', field: 'id' },
        { title: 'First Name', field: 'firstname' },
        { title: 'Last Name', field: 'lastname' },
        { title: 'ISActive', field: 'isactive' },
        { title: 'Category', field: 'category' },
      ]
      settableConfig(tabelColumnn)
    }
    fetchData();
  }, []);

  const filterTbaleData = async () => {
    let url = UrlConstant.Ip + UrlConstant.filterData
    settabelData(await HTTPService(url, 'get', ''))
  }
  return (
    <React.Fragment>
      <Container>
        <br />
        <Row>
          <Col md={12} lg={12} sm={12} xs={12}>
            <h2>Dashboard</h2>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={11} lg={11} sm={6} xs={6}>
            <InputElement type={'text'} inputChangeHandler={(e) => setfilterValue(e.target.value)} label={''} inputValue={filterValue} inputPlaceHolder={'filter'}></InputElement>
          </Col>
          <Col md={1} lg={1} sm={6} xs={6}>
            <br />
            <Button variant="primary" onClick={filterTbaleData} size="md">Go!</Button>
          </Col>
        </Row>
        <Row>
          {tabelData.length > 0 ? <CustomTable columns={tableConfig} data={tabelData}></CustomTable> : ''}
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Dashboard;
