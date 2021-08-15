import React from 'react'
import Link from 'next/link'
import { CartContext } from '@contexts/cart.context'
import { cartTotal } from '@helpers/products'

const Navbar = () => {
  const { state: cartState } = React.useContext(CartContext)

  const totalProducts = cartTotal(Object.values(cartState.items))

  return (
    <nav className='bg-gray-800 fixed w-full top-0'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <Link href='/store'>
              <a className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                  />
                </svg>
              </a>
            </Link>
          </div>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex-shrink-0 flex items-center'>
              <h3 className='block lg:hidden text-white h-8 w-auto'>
                SHOPPING CART
              </h3>
              <h3 className='hidden lg:block text-white h-8 w-auto'>
                SHOPPING CART
              </h3>
            </div>
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex space-x-4'>
                <Link href='/store'>
                  <a
                    className='text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700'
                    aria-current='page'
                  >
                    Store
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className='justify-between inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <Link href='/cart'>
              <a
                role='button'
                className='flex relative items-center justify-center px-4 py-2 pr-5 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              >
                <i className='fas fa-shopping-cart fa-lg'></i>

                <label className='absolute -right-1 -top-1  bg-red-600 px-2 rounded-full text-white font-mono leading-5 text-center text-sm'>
                  {totalProducts}
                </label>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
