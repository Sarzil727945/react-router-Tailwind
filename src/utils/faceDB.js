// add data to object set to localStorage

const addToDB = (id) =>{
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
     shoppingCart[id] = newQuantity ;
}
else{
     shoppingCart[id] = 1 ;
}

// localStorage data set
localStorage.setItem('shopping-carts', JSON.stringify(shoppingCart));
}

export {addToDB}