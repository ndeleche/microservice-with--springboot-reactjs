import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SiderBar from './components/SideBar';
import Product from './components/product/Product';
import Side from './components/product/Side';
import House from './components/House';
import Phone from './components/Phone';
import Car from './components/Car';
import ProductList from './components/product/ProductList'
import { Routes,Route, Router } from 'react-router-dom';
import { Layout, Image } from 'antd';
import CarDescription from './components/CarDescription';
import PhoneDescription from './components/PhoneDescriptions';
import Home from './Home';
import ServiceList from './components/ServiceList';
import HouseData from './components/HouseData';
import AddEdit from './components/AddEdit';
import Motorcycle from './components/product/Motorcycle';
import Housing from './components/Housing';
import Store from './connector/Store';
import Total from './connector/Total';
import ProductItem from './components/product/ProductItem';

const {Sider,Content,Footer} = Layout;

function App() {
  return (
    <Layout>
      <Sider style={{height:"100vh",backgroundColor:"white",marginLeft:"-2%"}}>
        <Side />
      </Sider>
      <Layout>
        <Content>
         <Routes>
           <Route path="/" element={ <Home />} /> 
           <Route path="productItem" element={ <ProductItem />} /> 
           <Route path="house" element={ <House />} /> 
           <Route path="housing" element={ <Housing />} /> 
           <Route path="house/:id" element={ <HouseData />} /> 
           <Route path="product" element={ <Product />} />  
           <Route path="motorcycle" element={ <Motorcycle />} /> 
           <Route path="car" element={ <Car />} /> 
           
           <Route path="phone" element={ <Phone /> } /> 
           <Route path="car/:id" element={ <CarDescription />} /> 
           <Route path=":id" element={ <ServiceList />} /> 
           <Route path="phone/:id" element={ <PhoneDescription />} /> 
           <Route path="add" element={ <AddEdit />} /> 
           <Route path="store" element={ <Store />} /> 
            
         </Routes>
         
        </Content>
       
        <Footer className='text-center italic'>reseived by @MzumbeIT Programer Group</Footer>
      </Layout>
    </Layout>
      
  );
}

export default App;
