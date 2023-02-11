import React, { useState } from "react";
import items from "./SideContent";
import './sidebar.css'
import {Layout, Card, Menu, theme, Divider } from "antd";
const {Sider, Content } = Layout;

const SiderBar = () => {

    const [item , setIem] = useState(items);

  return (
      <div className="sidebar">
          <h3 className="malitech my-4 p-3 mb-5 bg-light rounded">MaliTech Programmer Group!</h3>
          <div className="">
          {
            item.map((item)=>{
               return(
                <div className="mt-3">
                   <div className="">{item.label}</div>
                </div>
               )
              
            })
          }

          <Divider />
          </div>
      </div>
  );
};
export default SiderBar;
