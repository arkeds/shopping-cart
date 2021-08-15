import Layout from '@components/template/Layout'

export default function Home() {
  return (
    <>
      <Layout>
        <div className='container mx-auto bg-gray-200 top-10 mt-20 rounded shadow-lg p-2 text-center'>
          <h3 className='text-3xl'>Simple Shopping Cart Prototype</h3>
          <p className='mt-2'>
            This project uses React's latest features, Hooks and ContextAPI and
            designed using TailwindCSS.
          </p>
          <code className='mt-3'>
            Data being generated is from the faker.js and it is persisted on the
            browser's local storage to replenish the state.
          </code>
        </div>
      </Layout>
    </>
  )
}
