import Head from 'next/head'
import Navbar from '@components/template/Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Shopping Cart</title>
      </Head>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
