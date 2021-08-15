import React from 'react'
import { ProductsContext } from '@contexts/products.context'
import { CartContext } from '@contexts/cart.context'
import Layout from '@components/template/Layout'
import PageTitle from '@components/PageTitle'
import ProductTile from '@components/ProductTile'

const store = () => {
  const { state: productsState } = React.useContext(ProductsContext)
  const { state: cartState, dispatch: cartDispatch } =
    React.useContext(CartContext)
  const { products } = productsState
  const { productIds } = cartState

  const onAddToCart = (itemId) => {
    //check if product is already added
    const productInCart = !!productIds.find((item) => item === itemId)
    if (!productInCart) {
      const productDetails = products.find((item) => item.id === itemId)
      const payload = {
        ...productDetails,
        qty: 1,
      }
      cartDispatch({
        type: 'ADD_PRODUCT_ID',
        payload: itemId,
      })
      cartDispatch({
        type: 'ADD_ITEM_INFO',
        payload: payload,
        key: itemId,
      })
      return
    }

    cartDispatch({
      type: 'INCREMENT_ITEM_QTY',
      payload: itemId,
    })
    return
  }
  return (
    <Layout>
      <div className='container mx-auto bg-gray-100 top-10 mt-20'>
        <PageTitle title='Store Products' />
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-9 md:gap-1'>
          {products.map((item) => (
            <ProductTile
              key={item.id}
              productId={item.id}
              productName={item.name}
              productDepartment={item.department}
              productImage={item.image}
              productPrice={item.price}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default store
