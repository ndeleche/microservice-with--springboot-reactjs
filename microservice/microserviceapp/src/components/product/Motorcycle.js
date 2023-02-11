import React,{useState} from 'react'
import motorcycle from '../../components/assets/phone.json'
import { Card } from 'antd';

function Motorcycle() {

    const [data, setData] = useState(motorcycle);

  return (
    <div>
        Motorcycle
         {
            data.map((item)=>{
                return(
                    <Card>
                        <div>{item.id}</div>
                        <div>{item.name}</div>
                        <div>{item.description}</div>
                        <div>{item.price}</div>
                    </Card>
                )
            })
         }
    </div>
  )
}

export default Motorcycle