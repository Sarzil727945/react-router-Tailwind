import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../Cards/ProductCard';
import { addToLocalStorage } from '../../utils/faceDB';

const Shop = () => {
     const data = useLoaderData();

     // card button handler
     const handlerAddToCard = (id) =>{
          addToLocalStorage(id);
     }
     return (
          <div className='product-container'>
               {
                    data.map(productData=> <ProductCard 
                         key={productData.id}
                         product ={productData}
                         handlerAddToCard={handlerAddToCard}
                         ></ProductCard>)
               }
          </div>
     );
};

export default Shop;