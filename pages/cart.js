import React from 'react'
import { CartContext } from '@contexts/cart.context'
import { cartTotal, cartTotalAmount } from '@helpers/products'
import Layout from '@components/template/Layout'
import PageTitle from '@components/PageTitle'
import CartItem from '@components/CartItem'

const cart = () => {
  const { state: cartState, dispatch: cartDispatch } =
    React.useContext(CartContext)

  const { productIds, items } = cartState

  const totalProducts = cartTotal(Object.values(cartState.items))
  const totalAmount = cartTotalAmount(Object.values(cartState.items))
  return (
    <Layout>
      <div className='container mx-auto bg-gray-100 top-10 mt-20'>
        <PageTitle title='My Cart' />
        <div className='container md:flex md:flex-row flex-row-reverse  flex-initial justify-between mt-5'>
          <div className='w-full md:w-1/6 px-2 inline-block md:hidden'>
            <div className='rounded bg-white shadow-md p-2'>
              <div>
                <label className='font-bold'>Items:</label>
                <span className='ml-2'>{totalProducts}</span>
              </div>
              <div>
                <label className='font-bold text-lg'>Total:</label>
                <span className='ml-2 text-xl'>{`₱${totalAmount}`}</span>
              </div>
            </div>
          </div>
          <div className='md:w-5/6 px-8 '>
            <div className='hidden md:flex flex-row justify-around items-end bg-white  rounded md:ml-5 w-full py-3 shadow-md'>
              <div></div>
              <div></div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Total</div>
            </div>

            <div className='flex flex-col '>
              {productIds.map((product) => {
                return <CartItem key={product} details={items[product]} />
              })}
            </div>
          </div>
          <div className='w-full md:w-1/6 px-2 hidden md:inline-block'>
            <div className='rounded bg-white shadow-md p-2'>
              <div>
                <label className='font-bold'>Items:</label>
                <span className='ml-2'>{totalProducts}</span>
              </div>
              <div>
                <label className='font-bold text-lg'>Total:</label>
                <span className='ml-2 text-xl'>{`₱${totalAmount}`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default cart
