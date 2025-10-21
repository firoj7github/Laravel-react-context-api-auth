import React, { useEffect, useState } from 'react'
import api from '../api/api';

 const Product = () => {
    const [product, setProduct] = useState([]);
    useEffect(()=>{
      let isMounted = true; // Component এখন আছে

      const fetchProduct = async() =>{
        try{
         const res = await api.get("/products");
        if(isMounted) setProduct(res.data);
        } catch(err){
         console.log('Failed to fetch products');
        }
        
      };

      fetchProduct();

    return ()=>{
     isMounted = false;
    };

    },[]);
  return (
    <div>Product</div>
  )
}

export default Product;

