import React from 'react'

const Input = ({ type = 'text', placeholder = '', value = '', onChange }) => {
  return (
    <input
      type={type}
      className='flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-600 focus:border-transparent'
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  )
}

export default Input
