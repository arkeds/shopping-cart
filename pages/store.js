import React from 'react'
import { ProductsContext } from '@contexts/products.context'
import Layout from '@components/template/Layout'
import PageTitle from '@components/PageTitle'
import ProductTile from '@components/ProductTile'

const store = () => {
  const { state: productsState } = React.useContext(ProductsContext)

  const { products } = productsState
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
              productStock={item.stock}
              onAddToCart={() => {}}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default store
