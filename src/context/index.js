import { createContext, useContext } from "react";

//creating context:
const ProductContext = createContext();


// constext encapsulated function:

const useProductContext = () => useContext(ProductContext)

export { ProductContext, useProductContext}
