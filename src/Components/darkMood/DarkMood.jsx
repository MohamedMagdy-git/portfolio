import {useEffect, useState} from 'react'
import './darkMood.css'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {ImSun} from 'react-icons/im'



const DarkMood = () => {
   // التحقق من حالة الوضع المظلم في localStorage عند التحميل
   const initialToggle = localStorage.getItem('darkmo') === "true";
   const [toggle, setToggle] = useState(initialToggle);

   // تأثير لتغيير الوضع عند تغيير حالة toggle
   useEffect(() => {
       localStorage.setItem('darkmo', toggle);
       darkHandler(toggle);
   }, [toggle]);


   const darkHandler = (isDarkMode) => {
    window.dispatchEvent(new Event("darkModeChanged"));
       if (isDarkMode) {
            document.getElementsByTagName('body')[0].style.backgroundColor = '#303030'
            document.getElementsByTagName('header')[0].style.backgroundColor = '#424242'
            document.getElementsByClassName('about_box')[0].style.backgroundColor = '#424242'
            document.getElementsByClassName('about_box')[1].style.backgroundColor = '#424242'
            document.getElementsByClassName('about_box')[2].style.backgroundColor = '#424242'
            document.getElementsByClassName('skills_content')[0].style.backgroundColor = '#424242'
            document.getElementsByClassName('skills_content')[1].style.backgroundColor = '#424242'

            document.getElementsByClassName('skill_title')[0].style.color = '#6BBB82'
            document.getElementsByClassName('skill_title')[1].style.color = '#6BBB82'

            document.getElementsByClassName('skills_name')[0].style.color = '#f5f5f5'
            document.getElementsByClassName('skills_name')[1].style.color = '#f5f5f5'
            document.getElementsByClassName('skills_name')[2].style.color = '#f5f5f5'
            document.getElementsByClassName('skills_name')[3].style.color = '#f5f5f5'
            document.getElementsByClassName('skills_name')[4].style.color = '#f5f5f5'
            document.getElementsByClassName('skills_name')[5].style.color = '#f5f5f5'
            document.getElementsByClassName('skills_name')[6].style.color = '#f5f5f5'
            document.getElementsByClassName('skills_name')[7].style.color = '#f5f5f5'
            document.getElementsByClassName('skills_name')[8].style.color = '#f5f5f5'
            document.getElementsByClassName('skills_name')[9].style.color = '#f5f5f5'
            document.getElementsByClassName('skills_name')[10].style.color = '#f5f5f5'
            document.getElementsByClassName('skills_name')[11].style.color = '#f5f5f5'
            document.getElementsByClassName('skills_name')[12].style.color = '#f5f5f5'
            document.getElementsByClassName('skills_name')[13].style.color = '#f5f5f5'
            document.getElementsByClassName('skills_name')[14].style.color = '#f5f5f5'
            document.getElementsByClassName('skills_name')[19].style.color = '#f5f5f5'
            document.getElementsByClassName('skills_name')[15].style.color = '#f5f5f5'
            document.getElementsByClassName('skills_name')[16].style.color = '#f5f5f5'
            document.getElementsByClassName('skills_name')[17].style.color = '#f5f5f5'
            document.getElementsByClassName('skills_name')[18].style.color = '#f5f5f5'
            document.getElementsByClassName('skills_name')[20].style.color = '#f5f5f5'
            document.getElementsByClassName('skills_name')[21].style.color = '#f5f5f5'
            document.getElementsByClassName('skills_name')[22].style.color = '#f5f5f5'
            document.getElementsByClassName('skills_name')[23].style.color = '#f5f5f5'
            document.getElementsByClassName('skills_name')[24].style.color = '#f5f5f5'
            document.getElementsByClassName('skills_name')[25].style.color = '#f5f5f5'
            document.getElementsByClassName('skills_name')[26].style.color = '#f5f5f5'
            document.getElementsByClassName('skills_name')[27].style.color = '#f5f5f5'

            document.getElementsByClassName('about_subtitle')[0].style.color = '#f5f5f5'
            document.getElementsByClassName('about_subtitle')[1].style.color = '#f5f5f5'
            document.getElementsByClassName('about_subtitle')[2].style.color = '#f5f5f5'

            document.getElementsByClassName('home_subtitle')[0].style.color = '#f5f5f5';
            
            document.getElementsByClassName('services_content')[0].style.backgroundColor = '#424242';
            document.getElementsByClassName('services_content')[1].style.backgroundColor = '#424242';
            document.getElementsByClassName('services_button')[0].style.color = '#f5f5f5';
            document.getElementsByClassName('services_button')[1].style.color = '#f5f5f5';

            document.getElementsByClassName('qualifications_button')[0].style.color = '#f5f5f5';
            document.getElementsByClassName('qualifications_button')[1].style.color = '#f5f5f5';
            document.getElementsByClassName('qualifications_title')[0].style.color = '#f5f5f5';
            document.getElementsByClassName('qualifications_title')[1].style.color = '#f5f5f5';
            document.getElementsByClassName('qualifications_title')[2].style.color = '#f5f5f5';
            document.getElementsByClassName('qualifications_title')[3].style.color = '#f5f5f5';
            document.getElementsByClassName('qualifications_title')[4].style.color = '#f5f5f5';
            document.getElementsByClassName('qualifications_title')[5].style.color = '#f5f5f5';
            document.getElementsByClassName('qualifications_title')[6].style.color = '#f5f5f5';
            document.getElementsByClassName('qualifications_title')[7].style.color = '#f5f5f5';
            document.getElementsByClassName('qualifications_title')[8].style.color = '#f5f5f5';

            document.getElementsByClassName('srvices_content_title')[0].style.color = '#f5f5f5';
            document.getElementsByClassName('srvices_content_title')[1].style.color = '#f5f5f5';

            document.getElementsByClassName('testimonials_card')[0].style.backgroundColor = '#424242';
            document.getElementsByClassName('testimonials_card')[1].style.backgroundColor = '#424242';
            document.getElementsByClassName('testimonials_card')[2].style.backgroundColor = '#424242';
            document.getElementsByClassName('testimonials_card')[3].style.backgroundColor = '#424242';
            document.getElementsByClassName('testimonials_card')[4].style.backgroundColor = '#424242';

            document.getElementsByClassName('testimonials_title')[0].style.color = '#f5f5f5';
            document.getElementsByClassName('testimonials_title')[1].style.color = '#f5f5f5';
            document.getElementsByClassName('testimonials_title')[2].style.color = '#f5f5f5';
             document.getElementsByClassName('testimonials_title')[3].style.color = '#f5f5f5';
            document.getElementsByClassName('testimonials_title')[4].style.color = '#f5f5f5';


            document.getElementsByClassName('contact_title')[0].style.color = '#f5f5f5';

            document.getElementsByClassName('contact_form-input')[0].style.backgroundColor = '#303030';
            document.getElementsByClassName('contact_form-input')[1].style.backgroundColor = '#303030';
            document.getElementsByClassName('contact_form-input')[2].style.backgroundColor = '#303030';

            
            document.getElementsByClassName('contact_form-title')[0].style.backgroundColor = '#303030';
            document.getElementsByClassName('contact_form-title')[1].style.backgroundColor = '#303030';
            document.getElementsByClassName('contact_form-title')[2].style.backgroundColor = '#303030';

            document.getElementsByClassName('contact_card')[0].style.backgroundColor = '#424242';
            document.getElementsByClassName('contact_card')[1].style.backgroundColor = '#424242';
            document.getElementsByClassName('contact_card')[2].style.backgroundColor = '#424242';

            document.getElementsByClassName('contact_botton')[0].style.color = '#f9f9f9';
            document.getElementsByClassName('contact_botton')[1].style.color = '#f9f9f9';
            document.getElementsByClassName('contact_botton')[2].style.color = '#f9f9f9';


            document.getElementsByClassName('footer')[0].style.backgroundColor = '#303030';
            // document.getElementsByClassName('srvices_content_title')[1].style.color = '#f5f5f5';
        }
         else {
            document.getElementsByTagName('body')[0].style.backgroundColor = '#fafafa'
            document.getElementsByTagName('header')[0].style.backgroundColor = '#fafafa'
            document.getElementsByClassName('about_box')[0].style.backgroundColor = '#fff'
            document.getElementsByClassName('about_box')[1].style.backgroundColor = '#fff'
            document.getElementsByClassName('about_box')[2].style.backgroundColor = '#fff'
            document.getElementsByClassName('skills_content')[0].style.backgroundColor = '#fff'
            document.getElementsByClassName('skills_content')[1].style.backgroundColor = '#fff'

            document.getElementsByClassName('skills_name')[0].style.color = '#333'
            document.getElementsByClassName('skills_name')[1].style.color = '#333'
            document.getElementsByClassName('skills_name')[2].style.color = '#333'
            document.getElementsByClassName('skills_name')[3].style.color = '#333'
            document.getElementsByClassName('skills_name')[4].style.color = '#333'
            document.getElementsByClassName('skills_name')[5].style.color = '#333'
            document.getElementsByClassName('skills_name')[6].style.color = '#333'
            document.getElementsByClassName('skills_name')[7].style.color = '#333'
            document.getElementsByClassName('skills_name')[8].style.color = '#333'
            document.getElementsByClassName('skills_name')[9].style.color = '#333'
            document.getElementsByClassName('skills_name')[10].style.color = '#333'
            document.getElementsByClassName('skills_name')[11].style.color = '#333'
            document.getElementsByClassName('skills_name')[12].style.color = '#333'
            document.getElementsByClassName('skills_name')[13].style.color = '#333'
            document.getElementsByClassName('skills_name')[14].style.color = '#333'
            document.getElementsByClassName('skills_name')[19].style.color = '#333'
            document.getElementsByClassName('skills_name')[15].style.color = '#333'
            document.getElementsByClassName('skills_name')[16].style.color = '#333'
            document.getElementsByClassName('skills_name')[17].style.color = '#333'
            document.getElementsByClassName('skills_name')[18].style.color = '#333'
            document.getElementsByClassName('skills_name')[20].style.color = '#333'
            document.getElementsByClassName('skills_name')[21].style.color = '#333'
            document.getElementsByClassName('skills_name')[22].style.color = '#333'
            document.getElementsByClassName('skills_name')[23].style.color = '#333'
            document.getElementsByClassName('skills_name')[24].style.color = '#333'
            document.getElementsByClassName('skills_name')[25].style.color = '#333'
            document.getElementsByClassName('skills_name')[26].style.color = '#333'
            document.getElementsByClassName('skills_name')[27].style.color = '#333'

            document.getElementsByClassName('about_subtitle')[0].style.color = '#333'
            document.getElementsByClassName('about_subtitle')[1].style.color = '#333'
            document.getElementsByClassName('about_subtitle')[2].style.color = '#333'

            
            document.getElementsByClassName('home_subtitle')[0].style.color = '#333';

            document.getElementsByClassName('services_content')[0].style.backgroundColor = '#fff';
            document.getElementsByClassName('services_content')[1].style.backgroundColor = '#fff';

            document.getElementsByClassName('services_button')[0].style.color = '#444';
            document.getElementsByClassName('services_button')[1].style.color = '#444';

            document.getElementsByClassName('qualifications_button')[0].style.color = '#333';
            document.getElementsByClassName('qualifications_button')[1].style.color = '#333';

            document.getElementsByClassName('qualifications_button')[1].style.color ='#444';
            document.getElementsByClassName('qualifications_button')[0].style.color ='#444';
            document.getElementsByClassName('qualifications_title')[0].style.color = '#444';
            document.getElementsByClassName('qualifications_title')[1].style.color = '#444';
            document.getElementsByClassName('qualifications_title')[2].style.color = '#444';
            document.getElementsByClassName('qualifications_title')[3].style.color = '#444';
            document.getElementsByClassName('qualifications_title')[4].style.color = '#444';
            document.getElementsByClassName('qualifications_title')[5].style.color = '#444';
            document.getElementsByClassName('qualifications_title')[6].style.color = '#444';
            document.getElementsByClassName('qualifications_title')[7].style.color = '#444';
            document.getElementsByClassName('qualifications_title')[8].style.color = '#444';

            document.getElementsByClassName('srvices_content_title')[0].style.color = '#333';
            document.getElementsByClassName('srvices_content_title')[1].style.color = '#333';
        
            document.getElementsByClassName('testimonials_card')[0].style.backgroundColor = '#fff';
            document.getElementsByClassName('testimonials_card')[1].style.backgroundColor = '#fff';
            document.getElementsByClassName('testimonials_card')[2].style.backgroundColor = '#fff';
            document.getElementsByClassName('testimonials_card')[3].style.backgroundColor = '#fff';
            document.getElementsByClassName('testimonials_card')[4].style.backgroundColor = '#fff';
           
            document.getElementsByClassName('testimonials_title')[0].style.color = '#111111';
            document.getElementsByClassName('testimonials_title')[1].style.color = '#111111';
            document.getElementsByClassName('testimonials_title')[2].style.color = '#111111';
             document.getElementsByClassName('testimonials_title')[3].style.color = '#111111';
            document.getElementsByClassName('testimonials_title')[4].style.color = '#111111';

            document.getElementsByClassName('contact_title')[0].style.color = '#333';

            document.getElementsByClassName('contact_form-input')[0].style.backgroundColor = '#f9f9f9';
            document.getElementsByClassName('contact_form-input')[1].style.backgroundColor = '#f9f9f9';
            document.getElementsByClassName('contact_form-input')[2].style.backgroundColor = '#f9f9f9';

            
            document.getElementsByClassName('contact_form-title')[0].style.backgroundColor = '#f9f9f9';
            document.getElementsByClassName('contact_form-title')[1].style.backgroundColor = '#f9f9f9';
            document.getElementsByClassName('contact_form-title')[2].style.backgroundColor = '#f9f9f9';

            document.getElementsByClassName('contact_card')[0].style.backgroundColor = '#f9f9f9';
            document.getElementsByClassName('contact_card')[1].style.backgroundColor = '#f9f9f9';
            document.getElementsByClassName('contact_card')[2].style.backgroundColor = '#f9f9f9';

            document.getElementsByClassName('contact_botton')[0].style.color = '#444';
            document.getElementsByClassName('contact_botton')[1].style.color = '#444';
            document.getElementsByClassName('contact_botton')[2].style.color = '#444';

            document.getElementsByClassName('footer')[0].style.backgroundColor = '#fff';

        }
    }
  
   return (
    <div className={"darkMood"}>
        <div className="button darkBttn" onClick={()=> {
            setToggle(!toggle)
            darkHandler()
            }}>
                <>
            { localStorage.getItem('darkmo') === "true" ?
             <>
                <BsFillMoonStarsFill className='moon'/>
             </> 
             : 
             <>
               <ImSun className='sun'/>
             </>}
             </>
        </div>
    </div>
  )
}

export default DarkMood