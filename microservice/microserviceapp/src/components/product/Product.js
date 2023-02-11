import React,{useState} from 'react'
import products from './ProductList'

import './product.css'
import { Table,Tag,Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ImQuotesLeft,ImQuotesRight } from 'react-icons/im'

function Product({id, title, image, price}) {
  const navigate = useNavigate();
    const [product , setProduct] = useState(products);
    

    const productstatus =(productstatus)=>{
      if(productstatus==="pending"){
        return <Tag color={'yellow'}>pending</Tag>
      }
      if(productstatus==="delivered"){
        return <Tag color={'blue'}>delivered</Tag>
      }
      if(productstatus==="declined"){
        return <Tag color={'red'}>declined</Tag>
      }
    }

    const tablcolumns=[
      {
        title:"Service ID",
        dataIndex:"id",
        key:"id"
      },
      {
        title:"Service Name",
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
        render: (price) => `${price} TSH`
      },
      {
        title:"status",
        dataIndex:"status",
        key:"status",
        render: productstatus
      },
      
    ];

  return (
    <div className=''>
        <h3 className='form-control my-3 '>Accessories!</h3>
    <div className='form-control my-5' ></div>
    <div>{id}</div>
    <div>{title}</div>
    <div>{image}</div>
    <div>{price}</div>

    
    <Table 
        dataSource={products}
        columns={tablcolumns}
        rowKey="id"
        onRow={(productItem)=>({
          onClick: () =>navigate(`${productItem.id}`)
     })}
    />
    </div>

  )
}

export default Product