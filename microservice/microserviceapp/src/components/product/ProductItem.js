import React, { useEffect, useState } from 'react'
import Product from './Product'
import axios from 'axios'

function ProductItem() {

    const [data , setData] = useState([]);

    const loadData = async() =>{
        const getdata = await axios.get("http://localhost:3001/api/productget");
        setData(getdata.data);
    }

   useEffect =(()=>{
    loadData();
   }, [])


  return (
    <div>Product Item
        {
            data.map( item =>{
                return(
                        <Product 
                            id = {item.id}
                            title={item.title}
                            image={item.image}
                            price ={item.price}                      
                        />
                )
            })
        }
      
    </div>
  )
}

export default ProductItem