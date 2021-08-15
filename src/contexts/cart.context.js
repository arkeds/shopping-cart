import { createContext, useReducer, useEffect } from 'react'
import cartReducer from '@reducers/cart.reducer'
import { persistedState } from '@helpers/products'

const CartContext = createContext(null)

const initialState = {
  items: {},
  productIds: [],
}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    cartReducer,
    persistedState(initialState, 'CART'),
  )

  useEffect(() => {
    window.localStorage.setItem('CART', JSON.stringify(state))
  }, [state])

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
