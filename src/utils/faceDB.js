// add data to object set to localStorage start
const addToLocalStorage = (id) => {
     let shoppingCart = {};

     // get previous data from localStorage 
     const preciousData = localStorage.getItem('shopping-carts')
     if (preciousData) {
          shoppingCart = JSON.parse(preciousData);
     }

     // add quantity
     const quantity = shoppingCart[id]
     if (quantity) {
          const newQuantity = quantity + 1;
          shoppingCart[id] = newQuantity;
     }
     else {
          shoppingCart[id] = 1;
     }

     // localStorage data set
     localStorage.setItem('shopping-carts', JSON.stringify(shoppingCart));
}
// add data to object set to localStorage end

// get to data localStorage start
const getToLocalStorage = () => {
     let shoppingCart = {};

     // get previous data from localStorage 
     const preciousData = localStorage.getItem('shopping-carts')
     if (preciousData) {
          shoppingCart = JSON.parse(preciousData);
     }
     return shoppingCart;
}
// get to data localStorage end

export { addToLocalStorage, getToLocalStorage };