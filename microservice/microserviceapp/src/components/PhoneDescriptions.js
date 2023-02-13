import { Card, List,Image } from 'antd'
import React, { useState } from 'react';
import './phone.css'
import phone from "../components/assets/phone.json"
import image from "../img/phone/pexels-hammad-khalid-1786433.jpg"
import image1 from "../img/phone/pexels-jessica-lewis-creative-583842.jpg"
import image2 from "../img/phone/pexels-matheus-bertelli-799443.jpg"
import image3 from "../img/phone/pexels-noah-erickson-404280.jpg"
import { useParams } from 'react-router-dom'
import { useStateValue } from '../StateProvider';


function PhoneDescription(id,name,desc,imag,price) {
  
    const pictures = [image,image1,image2,image3];

    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () =>{
         
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id:id,
                name:name,
                desc:desc,
                image:imag,
                price:price
            },
        });
    };

    
  return (
    <Card title={`Phone descriptions`}>
        <List
        dataSource={phone}
        renderItem={(item)=>{
            return(
                <List.Item>
                    <div>{item.id}</div>
                    <div>{item.name}</div>
                    <div>{item.description}</div>
                    <div className='image '>
                       <Image src={pictures[3]} once preview={false}/>
                    </div>
                    <div>{item.price}</div>
                    <div className='btn btn-primary w-10 h-100 mx-10' onClick={addToBasket}>add to store</div>
                </List.Item>
            )
        }}
        />
    </Card>
  )
}

export default PhoneDescription