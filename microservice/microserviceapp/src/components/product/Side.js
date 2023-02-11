import React from 'react'
import { Layout,Menu,Card } from 'antd'
import { Content } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';
const {Sider} = Layout;

function Side() {

  const navigate = useNavigate();

  const productItem=[
    {
      key:"/",
      label:"Home"
    },
    {
      key:"house",
      label:"House"
    },
    {
      key:"car",
      label:"Car"
    },
    {
      key:"phone",
      label:"Phone"
    },
    {
      key:"Computer",
      label:"computer"
    },
    {
      key:"motorcycle",
      label:"MotorCycle"
    },
  ]
  
  const clickItem =(itemclicked)=>{
    navigate(itemclicked.key);
  }

  return (
     <Card>
       <Menu items={productItem} onClick={clickItem}/>
     </Card>
  )
}

export default Side