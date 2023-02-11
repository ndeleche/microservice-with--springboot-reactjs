import { Card, List,Table } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import phone from '../components/assets/phone.json'
import img1 from '../img/phone/pexels-hammad-khalid-1786433.jpg'

function Phone() {

    const navigate= useNavigate();

    const columns =[
        {
            title:"Phone No.",
            dataIndex:"id",
            key:"id"
        },
        {
            title:"Phone Name",
            dataIndex:"name",
            key:"name"
        },
        {
          title:"Descriptions",
          dataIndex:"desc",
          key:"desc"
      },

        {
            title:"Price",
            dataIndex:"price",
            key:"price",
            render: (price) =>`${price} TSH`
        },
    ]

  return (
    <Card title="Phones descriptions">
         <Table
             dataSource={phone}
             columns={columns}
             rowKey="id"
             onRow={(phoneProduct)=>({
                onClick: () =>navigate(`${phoneProduct.id}`)
             })
             }
         />
    </Card>
  )
}

export default Phone