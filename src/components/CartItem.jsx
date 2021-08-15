import React from 'react'
import { subTotal } from '@helpers/products'
import { CartContext } from '@contexts/cart.context'

const CartItem = ({ details }) => {
  const { state: cartState, dispatch: cartDispatch } =
    React.useContext(CartContext)

  const onClickIncrement = () => {
    cartDispatch({
      type: 'INCREMENT_ITEM_QTY',
      payload: details.id,
    })
  }

  const onClickDecrement = () => {
    if (details.qty === 1) {
      return
    }
    cartDispatch({
      type: 'DECREMENT_ITEM_QTY',
      payload: details.id,
    })
  }

  return (
    <div className='flex flex-col md:flex-row border justify-around bg-white rounded w-full m-2 sm:mx-5 shadow-md'>
      <div>
        <img
          className='sm:h-40 sm:w-50'
          src={details.image}
          alt='product image'
        />
      </div>
      <div className='flex flex-col md:flex-row justify-evenly w-full px-3 py-3'>
        <div className='w-full my-auto text-center'>
          <label className='md:invisible visible font-bold'>Item:</label>
          <label className='ml-1'>{details.name}</label>
        </div>
        <div className='w-full my-auto text-center'>
          <label className='md:invisible visible font-bold'>Price:</label>
          <label className='ml-1'>{`₱${details.price}`}</label>
        </div>
        <div className='w-full my-auto text-center'>
          <label className='md:invisible visible font-bold'>Quantity:</label>
          <label className='ml-1 md:hidden'>{details.qty}</label>
          <div className='flex justify-center '>
            <button
              type='button'
              className='bordered rounded bg-gray-400 hover:bg-gray-600 text-white py-0 px-3'
              onClick={() => onClickDecrement()}
            >
              <i className='fas fa-minus'></i>
            </button>
            <div className='bg-gray-200 p-2'>{details.qty}</div>
            <button
              type='button'
              className='border rounded bg-gray-400 hover:bg-gray-600 text-white py-0 px-3'
              onClick={() => onClickIncrement()}
            >
              <i className='fas fa-plus'></i>
            </button>
          </div>
        </div>
        <div className='w-full my-auto text-center'>
          <label className='md:invisible visible font-bold'>Total:</label>
          <label className='ml-1'>
            {`₱${subTotal(details.qty, details.price)}`}
          </label>
        </div>
      </div>
    </div>
  )
}

export default CartItem
