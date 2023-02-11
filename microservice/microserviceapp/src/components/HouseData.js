import React,{useState,useEffect} from 'react'
import axios from "axios"
import img from '../img/house/house1.PNG'
import './housedata.css'
import { useStateValue } from '../StateProvider';

function HouseData({id, name, desc, price}) {

    const [data, setData] = useState([]);

    const loadData =async () =>{
        const response = await axios.get("http://localhost:3001/api/gethouse");
        setData(response.data)
    }

    useEffect(() => {
        loadData();
    }, [])

    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () =>{
         
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id:id,
                name:name,
                desc:desc,
                price:price,
            },
        });
    };
    

  return (
    <div className='form-control'>
       <h2>House details!</h2>

        <table class="table table-dark">
        <thead>
            <tr>
                <th scope="col">H.no</th>
                <th scope="col">Name</th>
                <th scope="col">Descriptions</th>
                <th scope="col">price</th>
                <th scope="col">Image</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
                {
                data.map(item=>{
                    return(
                    <tr className='content'>
                        <th scope="row">{item.id}</th> 
                            <td>{item.name}</td> 
                            <td>{item.description}</td> 
                            <td>{item.price}</td> 
                            <td><img src={img} className="img"/></td> 
                            <td>
                        <div className='btn btn-primary w-100 h-100 mx-10' onClick={addToBasket}>add to store</div>
                            </td>
                        </tr>
                    )          
                    })
                }
        </tbody>
        </table>
    </div>
  )
}

export default HouseData