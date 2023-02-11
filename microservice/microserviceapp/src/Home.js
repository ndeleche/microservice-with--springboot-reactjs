import React,{useState} from 'react'
import products from './components/product/ProductList';
import { Table,Tag,Card } from 'antd';
import { useNavigate} from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Home() {
  const navigate = useNavigate();
  const [{basket}, dispatch] = useStateValue();

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
        title:"status",
        dataIndex:"status",
        key:"status",
        render: productstatus
      },
    ];

  return (
        <div className=''>
            <h2 className='form-control my-3 text-center m-3'>Accessories Services</h2>
        <div className='form-control my-5' >    
                <p>Store item ({basket?.length}) </p>
        </div>
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

export default Home