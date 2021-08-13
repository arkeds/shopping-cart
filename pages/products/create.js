import React from 'react'
import Layout from '@components/template/Layout'
import TextInput from '@components/forms/TextInput'
import NumberInput from '@components/forms/NumberInput'

const Create = () => {
  const [productName, setProductName] = React.useState('')
  const [productBrand, setProductBrand] = React.useState('')
  const [price, setPrice] = React.useState('')
  const [quantity, setQuantity] = React.useState('')

  return (
    <Layout>
      <div className='container mx-auto mt-5 max-w-xl mx-auto py-12 divide-y md:max-w-4xl bg-gray-100'>
        <div className=''>
          <h2 className='text-2xl font-bold'>Add Product</h2>
          <div className='mt-8 max-w-md'>
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
                <NumberInput value={quantity} onChange={setQuantity} />
              </label>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Create
