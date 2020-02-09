import React, { useState, useEffect } from 'react';
import HTTPService from '../../Services/HTTPService';
import {UrlConstant,localstorageConstants} from '../../Constants/Constants';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import InputElement from '../../Components/FormElements/inputElement'
import Product from '../../Components/CreateorUpdateProduct/CreateorUpdateProduct'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom';

function UpdateProduct(props) {
  const [productform, setproductform] = useState({name:'',manufacturer:'',category:'',hsnCode:'',sku:'',status:'',description:''});
  const setProductFormData = async (e,field) => {
    let formObject= Object.assign({}, productform);
    formObject[field]=e.target.value;
    setproductform({...productform,...formObject})
  }
  const getdata = async () => {
    let url = UrlConstant.Ip + UrlConstant.productList
    let data=await HTTPService(url, 'get','')
//     let url = UrlConstant.Ip + UrlConstant.productList
//   let data[0]= await HTTPService(url, 'post', productform)
  setproductform({...productform,...data[0]})
  }
  const CreateUser = async () => {
    let url = UrlConstant.Ip + UrlConstant.createProduct
  let data= await HTTPService(url, 'post', productform)
  }
  useEffect( () => {
    getdata()
  }, []);
  return (
    <React.Fragment>
      <Container>
        <br />  <Row>
          <Col md={12} lg={12} sm={12} xs={12}>
            <h2>Update Product</h2>
          </Col>
        </Row>
        <br />
        <Product
        productform={productform}
        disableHsnCode={true}
        setProductFormData={(e,field)=>setProductFormData(e,field)}
        />
        <Row>
        <Col md={6} lg={6} sm={6} xs={6}>
            <br />
            <Button variant="primary" onClick={CreateUser} size="md" disabled={!(productform.userId&&productform.role&&productform.department&&productform.displayname)}>Update</Button>&nbsp;&nbsp;&nbsp;
            <Button variant="secondary" onClick={()=>props.history.push("/admin/products")} size="md" >Cancel</Button> 
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default UpdateProduct;
