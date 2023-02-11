import { Card, Divider } from 'antd'
import React from 'react'
import House from '../components/House';
import HouseData from '../components/HouseData';
import Phone from '../components/Phone';
import { useStateValue } from '../StateProvider'
import image from '../img/house/house1.PNG'
import CarDescription from '../components/CarDescription';
import Total from './Total';


function Store() {

  const [{basket}, dispatch] = useStateValue();

  return (
    <Card title ="Store item for delivery">
      {
        basket.map(item =>(
          <Total 
            id = {item.id}
            name = {item.name}
            desc = {item.desc}
            price = {item.price}
          />
        ))
      }
        <Divider />
    </Card>
  )
}

export default Store