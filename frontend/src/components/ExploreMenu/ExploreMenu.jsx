import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our Packages from your <br/>Village to Nashik</h1>
        <p className='explore-menu-text'>Secure your Kumbh Mela Darshan with ease. Our platform helps villagers reserve their Darshan slots, ensuring a smooth and spiritual journey without the hassle of long queues.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?'All':item.menu_name)} key={index} className="explore-menu-list-item">
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu