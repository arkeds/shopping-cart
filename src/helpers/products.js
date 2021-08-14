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
