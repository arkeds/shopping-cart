import { createContext, useReducer } from 'react'
import cartReducer from '@reducers/cart.reducer'

const CartContext = createContext(null)

const initialState = {
  items: {},
  productIds: [],
}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartContextProvider }
