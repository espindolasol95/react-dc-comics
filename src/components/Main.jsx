import React from 'react'

const Main = () => {
  return (
    <>
     <main className="hero">
      <p> -- Content goes here --</p>
    </main>

    <section className='blue-banner'>
      <div className='item'>
        <img src="/img/buy-comics-digital-comics.png" alt="" /> 
        <p>digital comics</p>
      </div>
      <div className='item'>
        <img src="/img/buy-comics-merchandise.png" alt="" /> 
        <p>dc merchandise</p>
      </div>
      <div className='item'>
        <img src="/img/buy-comics-subscriptions.png" alt="" /> 
        <p>subscription</p>
      </div>
      <div className='item'>
        <img src="/img/buy-comics-shop-locator.png" alt="" /> 
        <p>comic shop locator</p>
      </div>
      <div className='item'>
        <img src="/img/buy-dc-power-visa.svg" alt="" /> 
        <p>dc power visa </p>
      </div>
    </section>
    </>
  )
}

export default Main
