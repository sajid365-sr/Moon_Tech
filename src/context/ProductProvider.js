
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { FETCHING_ERROR, FETCHING_START, FETCHING_SUCCESS } from '../state/actionTypes/actionTypes';
import { initialState, productReducer } from '../state/reducers/productReducer';


const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({children}) => {


    const [state, dispatch] = useReducer(productReducer,initialState);
  
  useEffect( () =>{
    dispatch({type: FETCHING_START})
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => {
      dispatch({type:FETCHING_SUCCESS, payload:data})
      
    })
    .catch((err) => {
      dispatch({type:FETCHING_ERROR})
    })
  },[]);

    const value = { state, dispatch };
    
    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};
export const useProduct = () =>{
    const context = useContext(PRODUCT_CONTEXT);
    return context;
}
export default ProductProvider;