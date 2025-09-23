import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/shopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
const Verify = () => {
    const {navigate,token,setCartItems,backendUrl}=useContext(ShopContext);
     const [searchParams,setSearchParams]=useSearchParams();
     const success=searchParams.get('success');
     const orderId=searchParams.get('orderId');

    const veriPayment=async()=>{
            try{
                if(!token){
               return null;
                }
             const response=await axios.post(backendUrl+'/api/order/verifyStripe',{success,orderId},{headers:{token}});

             if(response.data.success){
                setCartItems({});
                navigate('/orders');
             }
             else{
                navigate('/cart');
             }
            }
        catch(error){
               toast.error(error.message);
        }
    }

    useEffect(()=>{
       veriPayment();
    },[token])
    return (
        <div>
            
        </div>
    );
};

export default Verify;