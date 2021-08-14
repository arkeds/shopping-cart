import { createContext, useReducer } from 'react'
import productsReducer from '@reducers/products.reducer'

const ProductsContext = createContext(null)

const initialState = {
  products: [],
}

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState)
  return (
    <ProductsContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export { ProductsContext, ProductsContextProvider }
