const PageTitle = ({ title = 'Home' }) => {
  return (
    <div>
      <h1 className='text-4xl font-bold text-center lg:text-left'>{title}</h1>
    </div>
  )
}

export default PageTitle
