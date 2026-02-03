import axios from 'axios';
import { createContext } from 'react';

import { useState } from 'react';
import { useEffect } from 'react';
export const StoreContext = createContext(null);


const StoreContextProvider = (props) =>{


    const [cartItems, setCartItems] = useState({});

    const url = "http://localhost:4000";
    const [token,setToken] = useState("")

    const [ticket_list,setTicketList]=useState([])

    const addToCart = async (itemId) =>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }

        if (token) {
            await axios.post(url+'/api/cart/add',{itemId},{headers:{token}});
        }
    }

    const removeFromCart = async(itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if (token) {
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    }

    // useEffect(()=>{
    //     console.log(cartItems);
    // },[cartItems])
    const getTotalCartAmount =()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = ticket_list.find((product)=>product._id === item);
                totalAmount += itemInfo.price*cartItems[item];
            }
            
        }
        return totalAmount;
    }

    const fetchTicketList =async ()=>{
        const response = await axios.get(url+"/api/ticket/list")
        setTicketList(response.data.data)
    }

  /*  const loadCartData = async(token)=>{
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
        setCartItems(response.data.cartData);
        
    }*/

    useEffect(()=>{
        
        async function loadData() {
            await fetchTicketList()
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                //await loadCartData(localStorage.getItem("token"))
            }
        }
        loadData();
    },[])

    const contextValue={
        ticket_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }



    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;