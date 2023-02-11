import { Card, List,Image } from 'antd'
import React from 'react'
import "./service.css"
import { useParams } from 'react-router-dom'
import house from "../components/assets/house.json"
import imag from "../img/computer/computer2.PNG"

function ServiceList() {
    const {id} =useParams
  return (
    <Card>
        <h2>Computer Specifically</h2>
        <List
         dataSource={house}
         renderItem={(item)=>{
            return(
                <List.Item>
                    <div>{item.id}</div>
                    <div>{item.name}</div>
                    <div>{item.desc}</div>
                    
                    <div className='image-service'><Image src={imag} preview={false} w-30 /></div>
                </List.Item>
            )
         }}
        />
    </Card>
  )
}

export default ServiceList