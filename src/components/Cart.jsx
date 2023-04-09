import React, { useEffect, useState } from 'react';
import { getToLocalStorage } from '../utils/faceDB';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {
     const mainData = useLoaderData()
     const [cart, setCart] = useState([]);

     useEffect(()=>{
          const localStorageData = getToLocalStorage();
          let newArr = [];
          for (const id in localStorageData) {
               const foundData = mainData.find(pd => pd.id === id)
               if (foundData) {
                    foundData.quantity = localStorageData[id];
                    newArr.push(foundData)  
               }
            }
            setCart(newArr)
     },[])
     console.log(cart);

     return (
          <div>
               
          </div>
     );
};

export default Cart;