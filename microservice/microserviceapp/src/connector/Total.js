import React from 'react'
import { getBasketTotal } from '../reducer'
import { useStateValue } from '../StateProvider'


function Total({id, name, description, price}) {

  const [{basket}, dispatch] = useStateValue();

  return (
    <div className='form-control w-50 d-flex mx-5 my-3'>Total
    {
      basket.map(() =>(
        <div>
          <div>{id}</div>
          <div>{name}</div>
          <div>{description}</div>
          <div>{price}</div>   
        </div>

      ))
    }
    <div>{`$getBasketTotal()`}</div>
     
    </div>
    
  )
  

}

export default Total