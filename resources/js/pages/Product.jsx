import React, { useEffect, useState } from 'react'
import api from '../api/api';
import ProductCard from './ProductCard';

 const Product = () => {
    const [products, setProduct] = useState([]);
    useEffect(()=>{
      // console.log("✅ useEffect started");
      let isMounted = true; // Component এখন আছে

      const fetchProduct = async() =>{
        //  console.log("📡 Fetching from API...");
        try{
         const res = await api.get("/api/products");
         console.log(res.data);
        if(isMounted) setProduct(res.data.products);
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
    <div className="container mx-auto">
    <h1 className='text-center text-4xl font-medium mt-6 mb-6'>All Products</h1>
    <div className="grid grid-cols-1 sm:grid-clos-2 md:grid-cols-3 gap-3 p-3">
      {products.length > 0 ? (
    products.map((p) => (
      <ProductCard key={p.id} product={p} />
    ))
  ) : (
    <p>No products found</p>
  )}
    </div>
    </div>
  )
}

export default Product;

