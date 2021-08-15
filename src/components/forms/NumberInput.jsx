import React from 'react'

const NumberInput = ({
  placeholder = '',
  value = '',
  onChange,
  allowDecimal = true,
}) => {
  let allowedValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']

  if (!allowDecimal) {
    allowedValues = allowedValues.filter((item) => item !== '.')
  }

  const onKeyPress = (event) => {
    const keyValue = event.key
    if (!allowedValues.includes(keyValue)) {
      event.preventDefault()
    }
  }
  return (
    <input
      type='number'
      className='flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-600 focus:border-transparent'
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyPress={(e) => onKeyPress(e)}
      placeholder={placeholder}
    />
  )
}

export default NumberInput
