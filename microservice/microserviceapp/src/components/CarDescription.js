import { Card, List,Image } from 'antd'
import React from 'react';
import './carDesc.css'
import car from "../components/assets/car.json"
import { useParams } from 'react-router-dom'
import img1 from '../img/car/car1.PNG'
import img2 from '../img/car/car2.PNG'
import img3 from '../img/car/car3.PNG'
import img4 from '../img/car/car4.PNG'
import { useStateValue } from '../StateProvider';
import Store from '../connector/Store';
import Car from './Car';

function CarDescription({id, name, description, price ,image }) {

    const [{basket} , dispatch] = useStateValue();

     const addToBasket = () =>{
         
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id:id,
                name: name,
                description: description,
                price: price,
                image,image
            },
        });
    };

  return (
    <Card title={`Car descriptions`}>
        <List
        dataSource={car}
        renderItem={(item,index)=>{
            return(
                <List.Item className='list-items'>  
                    <div key={index.id}>{item.id}</div>
                    <div>{item.name}</div>
                    <div>{item.description}</div>
                    <div>{item.price}</div>
                    <div className='image'><Image src={img1} preview={false}/></div>     
                    <div className='btn btn-primary my-2 py-2' onClick={addToBasket} >add to store</div>
                </List.Item>
            )
        }}
        />
    </Card>
  )
}

export default CarDescription