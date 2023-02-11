import { Card, Descriptions, List, Table } from 'antd'
import React ,{ useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import car from '../components/assets/car.json'

function Car() {

    const navigate = useNavigate();

    const [data,setData] = useState([]);

    const loadData =async () =>{
        const response = await axios.get("http://localhost:3001/api/car");
        setData(response.data)
    }

    useEffect(() => {
        loadData();
    }, [])


    const columns =[
        {
            title:"id",
            dataIndex:"id",
            key:"id"
        },
        {
            title:"Name",
            dataIndex:"name",
            key:"name"
        },
        {
          title:"Description",
          dataIndex:"description",
          key:"description"
      },
        {
            title:"Price",
            dataIndex:"price",
            key:"price",
            render: (price) =>`${price} TSH`
        },
    ]
  return (
    <Card title="Car Type">
      <Table
          dataSource={data}
          columns={columns}
          rowKey="id"
          onRow={(productItem)=>({
            onClick: () =>navigate(`${productItem.id}`)
          })}
      />
    </Card>
  )
}

export default Car