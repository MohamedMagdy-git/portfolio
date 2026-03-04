import {useState, useEffect} from 'react'
import "./header.css"
import myLogo from "../../assets/logo updated.svg"

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


// for dark mode
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkmo') === "true");

   useEffect(() => {
     const handleDarkModeChange = () => {
       setDarkMode(localStorage.getItem('darkmo') === "true");
     };

     //  استمع للحدث المخصص
     window.addEventListener("darkModeChanged", handleDarkModeChange);

     return () => {
       window.removeEventListener("darkModeChanged", handleDarkModeChange);
     };
   }, []);
   

useEffect(()=> {
    setTimeout(() => {
        
        window.onscroll = ()=> {
            if (window.scrollY >= 50) {
                document.querySelector(".header").classList.add("headerOnscrooll")
            }else {
                document.querySelector(".header").classList.remove("headerOnscrooll")
            }
        }
      
    }, 1000);
  }, [])
 
 
    return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav_logo">
                <img src={myLogo} alt="mo logo"   />
            </a>
            <div className={`nav_menu ${darkMode ? 'nav_menu-dark-mode' : 'nav_menu'}`}>
                <ul className="nav_list grid">
                    {/* nav item link in ul */}
                    <li className="nav_item">
                        <a className={active === '#Home' ?"nav_link active" : `nav_link ${darkMode ? 'nav_link_dark_mode' : ''}`} onClick={()=>activeLinkHandler('#Home')}    href='#Home' >
                            <i className='bx bx-home nav_icone'></i> Home
                        </a>
                    </li>
                     {/* nav item link in ul */}
                     <li className="nav_item">
                        <a className={active === '#About' ?"nav_link active" : `nav_link ${darkMode ? 'nav_link_dark_mode' : ''}`} onClick={()=>activeLinkHandler('#About')} href='#About' >
                            <i className='bx bx-user nav_icone'></i> About
                        </a>
                    </li>
                                         {/* nav item link in ul */}
                                         <li className="nav_item">
                        <a className={active === '#Skills' ?"nav_link active" : `nav_link ${darkMode ? 'nav_link_dark_mode' : ''}`} onClick={()=>activeLinkHandler('#Skills')} href='#Skills'>
                            <i className='bx bx-file nav_icone'></i> Skills
                        </a>
                    </li> 
                     {/* nav item link in ul */}
                     <li className="nav_item">
                        <a className={active === '#Services' ?"nav_link active" : `nav_link ${darkMode ? 'nav_link_dark_mode' : ''}`} onClick={()=>activeLinkHandler('#Services')} href='#Services'>
                         <i className='bx bx-briefcase-alt-2 nav_icone'></i> Services
                        </a>
                    </li>
                     {/* nav item link in ul */}
                     <li className="nav_item">
                        <a className={active === '#Portfolio' ?"nav_link active" : `nav_link ${darkMode ? 'nav_link_dark_mode' : ''}`} onClick={()=>activeLinkHandler('#Portfolio')} href='#Portfolio'>
                            <i className='bx bx-photo-album nav_icone'></i> Portfolio
                            
                        </a>
                    </li>
                     {/* nav item link in ul */}
                     <li className="nav_item">
                        <a className={active === '#Contact' ? "nav_link active" : `nav_link ${darkMode ? 'nav_link_dark_mode' : ''}`} onClick={()=>activeLinkHandler('#Contact')} href='#Contact'>
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