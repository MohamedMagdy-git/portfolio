import {useState, useEffect} from 'react'
import "./header.css"
import myLogo from "../../assets/logo m logo only.png"

function Header() {
    // logic for active link
    let [active, setActive] = useState("#Home");

    let activeLinkHandler = (value) => {
        setActive(value)
    }


//  logic for showing the header on mobile(hide and show)
let [toggle, setToggle] = useState(true); 

let navShowAndHide = ()=> {
    let nav_menu = document.querySelector(".nav_menu")
    setToggle(!toggle)
    if(toggle){
       nav_menu.classList.add("shown-header")
    }else{
        nav_menu.classList.remove("shown-header")
    }
}

useEffect(()=> {
    setTimeout(() => {
        
        window.onscroll = ()=> {
            if (window.scrollY >= 50) {
                document.querySelector(".header").classList.add("headerOnscrooll")
            }else {
                document.querySelector(".header").classList.remove("headerOnscrooll")
            }
        }
      
    }, 2000);
  }, [])
 
 
    return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav_logo">
                <img src={myLogo} alt="mo logo"   />
            </a>
            <div className="nav_menu">
                <ul className="nav_list grid">
                    {/* nav item link in ul */}
                    <li className="nav_item">
                        <a className={active === '#Home' ?"nav_link active" : 'nav_link'} onClick={()=>activeLinkHandler('#Home')}    href='#Home' >
                            <i className='bx bx-home nav_icone'></i> Home
                        </a>
                    </li>
                     {/* nav item link in ul */}
                     <li className="nav_item">
                        <a className={active === '#About' ?"nav_link active" : 'nav_link'} onClick={()=>activeLinkHandler('#About')} href='#About' >
                            <i className='bx bx-user nav_icone'></i> About
                        </a>
                    </li>
                                         {/* nav item link in ul */}
                                         <li className="nav_item">
                        <a className={active === '#Skills' ?"nav_link active" : 'nav_link'} onClick={()=>activeLinkHandler('#Skills')} href='#Skills'>
                            <i className='bx bx-file nav_icone'></i> Skills
                        </a>
                    </li> 
                     {/* nav item link in ul */}
                     <li className="nav_item">
                        <a className={active === '#Services' ?"nav_link active" : 'nav_link'} onClick={()=>activeLinkHandler('#Services')} href='#Services'>
                         <i className='bx bx-briefcase-alt-2 nav_icone'></i> Services
                        </a>
                    </li>
                     {/* nav item link in ul */}
                     <li className="nav_item">
                        <a className={active === '#Portfolio' ?"nav_link active" : 'nav_link'} onClick={()=>activeLinkHandler('#Portfolio')} href='#Portfolio'>
                            <i className='bx bx-photo-album nav_icone'></i> Portfolio
                            
                        </a>
                    </li>
                     {/* nav item link in ul */}
                     <li className="nav_item">
                        <a className={active === '#Contact' ? "nav_link active" : 'nav_link'} onClick={()=>activeLinkHandler('#Contact')} href='#Contact'>
                            <i className='bx bx-phone nav_icone'></i> Contact
                        </a>
                    </li>

                </ul>
            </div>

            <div className="nav_toggle" onClick={()=>navShowAndHide()}>
                <i className="uil uil-apps"></i>
                
                
            </div>
        </nav>
    </header>
  )
}

export default Header;