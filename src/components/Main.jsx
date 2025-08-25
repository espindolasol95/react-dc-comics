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
        <p>DIGITAL COMICS</p>
      </div>
      <div className='item'>
        <img src="/img/buy-comics-merchandise.png" alt="" /> 
        <p>DC MERCHANDISE</p>
      </div>
      <div className='item'>
        <img src="/img/buy-comics-subscriptions.png" alt="" /> 
        <p>SUBSCRIPTION</p>
      </div>
      <div className='item'>
        <img src="/img/buy-comics-shop-locator.png" alt="" /> 
        <p>COMIC SHOP LOCATOR</p>
      </div>
      <div className='item'>
        <img src="/img/buy-dc-power-visa.svg" alt="" /> 
        <p>DC POWER VISA </p>
      </div>
    </section>
    </>
  )
}

export default Main
