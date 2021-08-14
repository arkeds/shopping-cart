const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM_INFO':
      return {
        ...state,
        items: {
          ...state.items,
          [action.key]: action.payload,
        },
      }
    case 'ADD_PRODUCT_ID':
      return {
        ...state,
        productIds: [...state.productIds, action.payload],
      }
    case 'INCREMENT_ITEM_QTY': {
      const itemQty = parseInt(state.items[action.payload].qty) + 1
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            ...state.items[action.payload],
            qty: itemQty,
          },
        },
      }
    }
    default:
      return state
  }
}

export default cartReducer
