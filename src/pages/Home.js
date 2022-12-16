import React, { useEffect, useReducer, useState } from "react";
import { useProduct } from "../context/ProductProvider";

const Home = () => {

const initialState = {};

const productReducer = (state, action) =>{


}

  const [state, dispatch] = useReducer(productReducer,initialState);
  
  useEffect( () =>{
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  },[]);
  
  const { test } = useProduct();


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      <h1>This is home page</h1>
    </div>
  );
};

export default Home;
