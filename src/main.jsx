import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './components/Home';
import About from './components/About';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
     {
       path: "/",
       element: <Home></Home>,
     },
     {
       path: "/about",
       element:<About></About> ,
     },
   ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
     <RouterProvider router={router}></RouterProvider>
)
