import React from 'react' ;

const Header = () => {
  const nav = [
  { id: 1,
    label: "characters",
    active: false,
    href: "#"
  },
  { id: 2,
    label: "comics",
    active: false,
    href: "#"
  },
  { id: 3,
    label: "movies",
    active: false,
    href: "#"
  },
  { id: 4,
    label: "tv",
    active: false,
    href: "#"
  },
  { id: 5,
    label: "games",
    active: false,
    href: "#"
  },
  { id: 6,
    label: "collectibles",
    active: false, 
    href: "#"
  },
  { id: 7,
    label: "videos",
    active: false,
    href: "#"
  },
  { id: 8,
    label: "fans",
    active: false,
    href: "#"
  },
  { id: 9,
    label: "news",
    active: false,
    href: "#"
  },
  { id: 10,
    label: "shop",
    active: false,
    href: "#"
  },

  ]
  return (
    <header className='header-col'>
    <div className='logo'>
        <img src="/img/dc-logo.png" alt="dc-logo" />
    </div>
     <nav className="nav">
        <ul>
          {nav.map((link)=>{
            const{id,href,label,active}=link;
            return(
              <li key ={id} className={active === true ? 'active':''}>
                <a href={href}>{label}</a></li>
            )
          })};
        </ul>
      </nav>
    </header>
  )


}

export default Header

