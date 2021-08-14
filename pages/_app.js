import { ProductsContextProvider } from '@contexts/products.context'
import 'tailwindcss/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProductsContextProvider>
        <Component {...pageProps} />
      </ProductsContextProvider>
    </>
  )
}

export default MyApp
