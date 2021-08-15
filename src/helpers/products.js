import faker from 'faker'

export const fakeProducts = (total) => {
  let products = []
  for (let index = 0; index < total; index++) {
    products.push({
      id: faker.datatype.uuid(),
      name: faker.commerce.product(),
      department: faker.commerce.department(),
      image: faker.image.fashion(),
      price: faker.commerce.price(),
      stock: Math.floor(Math.random() * 100 + 10),
    })
  }
  return products
}

export const cartTotal = (cartItems) => {
  return cartItems.reduce((acc, item) => {
    return (acc += parseInt(item.qty))
  }, 0)
}

export const cartTotalAmount = (cartItems) => {
  const total = cartItems.reduce((acc, item) => {
    const quantityTotal = parseFloat(item.price) * parseInt(item.qty)
    return (acc += quantityTotal)
  }, 0)
  return thousandsSeparators(total.toFixed(2))
}

export const persistedState = (initialState, localStorageKey) => {
  if (typeof window === 'undefined') {
    return initialState
  }
  return JSON.parse(localStorage.getItem(localStorageKey)) || initialState
}

export const subTotal = (qty, price) => {
  const total = price * qty
  return thousandsSeparators(total.toFixed(2))
}

export const thousandsSeparators = (num) => {
  var num_parts = num.toString().split('.')
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return num_parts.join('.')
}
