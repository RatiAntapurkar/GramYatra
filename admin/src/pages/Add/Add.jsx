import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = ({url}) => {

    //const url = "http://localhost:4000"

    const [image,setImage] = useState(false);
    const [data,setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"Dindori"
    })

    const onChangeHandler=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onSubmitHandler = async(event)=>{
        event.preventDefault()
        const formData = new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        formData.append("image",image)
        const response = await axios.post(`${url}/api/ticket/add`,formData)
        if(response.data.success) {
            setData({ name:"",
                description:"",
                price:"",
                category:"Dindori"
            })
            setImage(false)
            toast.success(response.data.message)
        }else{
            toast.error(response.data.message)
        }
    }

  return (
    <div className='add'>
        <form className='flex-col' onSubmit={onSubmitHandler}>
            <div className='add-img-upload flex-col'>
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                    <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
                </label>
            </div>
            <div className="add-product-name flex-col">
                <p>Ticket</p>
                <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
            </div>
            <div className="add-product-description flex-col">
                <p>Ticket description</p>
                <textarea onChange={onChangeHandler} value={data.description} name="description" rows='6' placeholder='Write here' required  ></textarea>
            </div>
            <div className="add-category-price">
                <div className="add-category flex-col">
                    <p>Village</p>
                    <select onChange={onChangeHandler}  name="category">
                        <option value="Dindori">Dindori</option>
                        <option value="Chandwad">Chandwad</option>
                        <option value="Girnare">Girnare</option>
                        <option value="Igatpuri">Igatpuri</option>
                        <option value="Ozar">Ozar</option>
                        <option value="Pimpalgaon">Pimpalgaon</option>
                        <option value="Sinnar">Sinnar</option>
                        <option value="Yeola">Yeola</option>
                    </select>
                </div>
                <div className="add-price flex-col">
                    <p>Ticket Price</p>
                    <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='Rs.20' />
                </div>
            </div>
            <button type='submit' className='add-btn'>ADD</button>
        </form>
    </div>
  )
}

export default Add