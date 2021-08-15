import { ProductsContextProvider } from '@contexts/products.context'
import { CartContextProvider } from '@contexts/cart.context'
import 'tailwindcss/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProductsContextProvider>
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
      </ProductsContextProvider>
    </>
  )
}

export default MyApp
