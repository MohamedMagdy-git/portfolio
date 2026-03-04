import './App.css';
import Header from './Components/header/Header';
import { Home } from './Components/home/Home';
import { About } from './Components/about/About';
import { Skills } from './Components/skills/Skills';
import { Services } from './Components/services/Services';
import { useEffect, useState } from 'react';
import {  PropagateLoader } from 'react-spinners'
import { Qualifications } from './Components/qualifications/Qualifications';
import Testimonials from './Components/testimonials/Testimonials';
import { Contact } from './Components/contact/Contact';
import Footer from './Components/Footer/Footer';
import DarkMood from './Components/darkMood/DarkMood.jsx';
import Portfolio from './Components/Portfolio/portfolio.jsx';
// images import
import myLogo from "./assets/logo updated.svg"



function App() {
  let [togglelanding, Settogglelanding] = useState(false);


  useEffect(()=> {
    Settogglelanding(true)
    setTimeout(() => {
      Settogglelanding(false)
    }, 1000);
  }, [])





  return (
    <div className="App">
      
        {togglelanding ? 
        
        <div className='landing'>
          <img src={myLogo} alt="logo"  className='image_landing' />
          <PropagateLoader color={"#6BBB82"} />
        </div>
      
         :<> 
        <Header />
        <div className='main'>
          <Home />
          <DarkMood />
          <About />
          <Skills />
          <Portfolio/>
          <Services />
          <Qualifications />
          <Testimonials />
          <Contact />
          
        </div>

          <Footer />
        </>}
        
    </div>
  );
}

export default App;
