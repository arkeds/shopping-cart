import React from 'react'

const ProductTile = ({
  productId,
  productName,
  productDepartment,
  productImage,
  productPrice = 0.0,
  onAddToCart,
}) => {
  const [disabled, setDisabled] = React.useState(false)

  const onClickAddToCart = (productId) => {
    setDisabled(true)
    onAddToCart(productId)
    setTimeout(() => {
      setDisabled(false)
    }, 1000)
  }

  return (
    <div className='lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white md:my-3 md:mx-8 sm:my-1 mx-3 w-50 h-70'>
      <img src={productImage} alt='' className='' />

      <div className='px-4 py-2'>
        <h3 className='font-medium text-gray-600 text-lg my-2'>
          {productName}
        </h3>
        <p className='text-justify'>{`Department: ${productDepartment}`}</p>
        <p className='text-justify'>{`Price: ₱${productPrice}`}</p>
        <div className='mt-5'>
          <button
            title='Add to cart'
            className={`rounded  text-white px-4 py-2 ${
              disabled
                ? 'bg-green-500 hover:bg-green-700'
                : 'bg-blue-500 hover:bg-blue-700'
            }`}
            disabled={disabled}
            onClick={() => onClickAddToCart(productId)}
          >
            <i className={`fas ${disabled ? 'fa-check' : 'fa-plus'}`}></i>
            &nbsp; {disabled ? 'Added To cart' : 'Add To Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductTile
