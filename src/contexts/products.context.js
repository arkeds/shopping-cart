import { createContext, useReducer } from 'react'
import productsReducer from '@reducers/products.reducer'
import { fakeProducts } from '@helpers/products'

const ProductsContext = createContext(null)

const products = fakeProducts(10)

const initialState = {
  products: products,
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
