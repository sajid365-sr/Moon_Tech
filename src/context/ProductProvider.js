
import React, { createContext, useContext } from 'react';


const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({children}) => {

    const value = {test:'TEST'};
    
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