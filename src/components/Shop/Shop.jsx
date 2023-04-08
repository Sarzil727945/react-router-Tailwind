import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../Cards/ProductCard';

const Shop = () => {
     const data = useLoaderData();
     console.log(data);
     return (
          <div className='product-container'>
               {
                    data.map(productData=> <ProductCard 
                         key={productData.id}
                         product ={productData}
                         ></ProductCard>)
               }
          </div>
     );
};

export default Shop;