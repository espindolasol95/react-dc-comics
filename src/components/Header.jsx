import React from 'react' ;

const Header = () => {
  return (
    <header className='header-col'>
    <div className='logo'>
        <img src="/img/dc-logo.png" alt="dc-logo" />
    </div>
     <nav className="nav">
        <ul>
          <li><a href="#">characters</a></li>
          <li><a href="#" className="active">comics</a></li>
          <li><a href="#">movies</a></li>
          <li><a href="#">tv</a></li>
          <li><a href="#">games</a></li>
          <li><a href="#">collectibles</a></li>
          <li><a href="#">videos</a></li>
          <li><a href="#">fans</a></li>
          <li><a href="#">news</a></li>
          <li><a href="#">shop</a></li>
        </ul>
      </nav>
    </header>
  )


}

export default Header

