import { Card, Descriptions,List,Table } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import house from "../components/assets/house.json"



function House() {

  const navigate = useNavigate();

  const columns =[
    {
        title:"House No.",
        dataIndex:"id",
        key:"id"
    },
    {
        title:"House Name",
        dataIndex:"name",
        key:"name"
    },
    {
      title:"Descriptions",
      dataIndex:"description",
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
    <Card title="House Store">
            
            <Table
                dataSource={house}
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

export default House