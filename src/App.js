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




function App() {
  let [togglelanding, Settogglelanding] = useState(false);


  useEffect(()=> {
    Settogglelanding(true)
    setTimeout(() => {
      Settogglelanding(false)
    }, 1500);
  }, [])

 


  return (
    <div className="App">
      
        {togglelanding ? 
        <div className='landing'>
          <PropagateLoader color="#3BB78F" />
        </div>
         :<> 
        <Header />
        <div className='main'>
          <Home />
          <About />
          <Skills />
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
