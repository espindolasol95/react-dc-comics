import React from 'react' ;

const Header = () => {
  return (
    <header className='header-col'>
    <div className='logo'>
        <img src="/img/dc-logo.png" alt="dc-logo" />
    </div>
    <nav className='nav'>
      <ul>
       <li>characters</li>
        <li className='active'>comics</li>
        <li>movies</li>
        <li>tv</li>
        <li>games</li>
        <li>games</li>
        <li>videos</li>
        <li>fans</li>
        <li>news</li>
        <li>shop</li>
      </ul>
    </nav>
    </header>
  )


}

export default Header

