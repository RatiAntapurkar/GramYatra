import React, { useContext } from 'react'
import './Display.css'
import { StoreContext } from '../../context/StoreContext'
import Item from '../Item/Item'
const Display = ({category}) => {

    const {ticket_list} = useContext(StoreContext)
  return (
    <div className='display' id='display'>
        <h2>Top Slots for Tickets</h2>
        <div className="display-list">
            {ticket_list.map((item,index)=>{
                if(category==='All' || category===item.category){
                  return <Item key={index} id={item._id} name={item.name} description ={item.description} price={item.price} image={item.image} />
                }


                
            })}
        </div>
    </div>
  )
}

export default Display