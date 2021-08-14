const ProductTile = ({
  productId,
  productName,
  productDepartment,
  productImage,
  productPrice = 0.0,
  productStock = 0,
  onAddToCart,
}) => {
  return (
    <div className='lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white md:my-3 md:mx-8 sm:my-1 mx-3 w-50 h-70'>
      <img src={productImage} alt='' className='' />

      <div className='px-4 py-2'>
        <h3 className='font-medium text-gray-600 text-lg my-2'>
          {productName}
        </h3>
        <p className='text-justify'>{`Department: ${productDepartment}`}</p>
        <p className='text-justify'>{`Price: ₱${productPrice}`}</p>
        <p className='text-justify'>{`In Stock: ${productStock}`}</p>
        <div className='mt-5'>
          <button
            title='Add to cart'
            className='rounded bg-blue-500 text-white px-4 py-2 hover:bg-blue-700'
            onClick={() => onAddToCart(productId)}
          >
            <i className='fas fa-plus'></i>
            &nbsp; Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductTile
