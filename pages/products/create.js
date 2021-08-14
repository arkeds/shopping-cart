import React from 'react'
import { ProductsContext } from '@contexts/products.context'
import Layout from '@components/template/Layout'
import TextInput from '@components/forms/TextInput'
import NumberInput from '@components/forms/NumberInput'

const Create = () => {
  const { state, dispatch: productDispatch } = React.useContext(ProductsContext)
  const [productName, setProductName] = React.useState('')
  const [productBrand, setProductBrand] = React.useState('')
  const [price, setPrice] = React.useState('')
  const [quantity, setQuantity] = React.useState('')

  const onClickSave = () => {
    const productData = {
      name: productName,
      brand: productBrand,
      price: parseFloat(price).toFixed(2),
      quantity: quantity,
    }

    productDispatch({
      type: 'ADD_PRODUCT',
      payload: productData,
    })
    setProductName('')
    setProductBrand('')
    setPrice('')
    setQuantity('')
  }

  return (
    <Layout>
      <div className='container mx-auto mt-5 max-w-xl mx-auto py-12 divide-y bg-gray-100'>
        <div className='rounded bg-white p-2'>
          <h2 className='text-2xl font-bold'>Add Product</h2>
          <div className='mt-4 '>
            <div className='grid grid-cols-1 gap-6'>
              <label className='block'>
                <span className='text-gray-700'>Name</span>
                <TextInput
                  type='text'
                  value={productName}
                  onChange={setProductName}
                />
              </label>
              <label className='block'>
                <span className='text-gray-700'>Brand</span>
                <TextInput
                  type='text'
                  value={productBrand}
                  onChange={setProductBrand}
                />
              </label>
              <label className='block'>
                <span className='text-gray-700'>Price</span>
                <NumberInput value={price} onChange={setPrice} />
              </label>
              <label className='block'>
                <span className='text-gray-700'>Quantity</span>
                <NumberInput
                  value={quantity}
                  onChange={setQuantity}
                  allowDecimal={false}
                />
              </label>
              <button
                className='bordered rounded bg-blue-500 hover:bg-blue-700 text-white py-2'
                onClick={() => onClickSave()}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Create
