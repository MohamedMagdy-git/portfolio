import { useState} from 'react'
import "./services.css"

export const Services = () => {
    let [modaltoggle, setModaltoggle] = useState(0);
    

  return (
    <section className="services section" id='Services'>
        <h2 className="section__title">Services</h2>
        <span className='section__subtitle'>What i offer</span>


        <div className="services_container container grid">
            <div className="services_content">
                <div>
                     <i className='bx bx-palette services_icone bx-fade-down' ></i>
                    <h3 className="srvices_content_title">Web <br/> development</h3>
                </div>

                <div>
                    <span className="services_button" onClick={()=> setModaltoggle(1)}>View More
                    <i className='bx bx-right-arrow-alt more_icone'></i>
                    </span> 
                </div>
                <div className={modaltoggle === 1 ? "services_modal-active":"services_modal"}>

                    <div className="services_modal_content">
                        <i className='bx bx-x close_servises' onClick={()=> setModaltoggle(0)}></i>
                       <h4 className="services_modal_title">Web development</h4>
                       <p className='services_modal_subtitle'>
                       Service with more than 1 years of experience.Providing quality work to clients and companies.
                       </p>
                       

                       <ul className="services_modal_services">
                        <li className='services_modal_service'>
                            <i className='bx bx-check'></i>
                            <p>Code Designing user interfaces.</p>
                        </li>

                        <li className='services_modal_service'>
                            <i className='bx bx-check'></i>
                            <p>Design and mockups of products for companies.</p>
                        </li>

                        <li className='services_modal_service'>
                            <i className='bx bx-check'></i>
                            <p>Client support 1month.</p>
                        </li>

                        <li className='services_modal_service'>
                            <i className='bx bx-check'></i>
                            <p>Troubleshooting problems with performance.</p>
                        </li>

                        <li className='services_modal_service'>
                            <i className='bx bx-check'></i>
                            <p>Responsive web design.</p>
                        </li>
                       
                       </ul>


                       
                    </div>
                </div> 
            </div>

            <div className="services_content">
                
                <div>
                    <i className='bx bx-code-alt services_icone bx-fade-down'></i>
                    <h3 className="srvices_content_title">Web APP <br/> development</h3>
                </div>
                <span className="services_button" onClick={()=> setModaltoggle(2)}>View More
                <i className='bx bx-right-arrow-alt more_icone'></i>
                </span> 
                <div className={modaltoggle === 2 ? "services_modal-active":"services_modal"}>
                    <div className="services_modal_content">
                    <i className='bx bx-x close_servises' onClick={()=> setModaltoggle(0)}></i>
                       <h4 className="services_modal_title">Web development</h4>
                       <p className='services_modal_subtitle'>
                       Service with more than 1 years of experience.Providing quality work to clients and companies.
                       </p>
                       

                       <ul className="services_modal_services">
                        <li className='services_modal_service'>
                            <i className='bx bx-check'></i>
                            <p>Code Designing user interfaces.</p>
                        </li>

                        <li className='services_modal_service'>
                            <i className='bx bx-check'></i>
                            <p>Design and mockups of products for companies.</p>
                        </li>

                        <li className='services_modal_service'>
                            <i className='bx bx-check'></i>
                            <p>Client support 5month.</p>
                        </li>

                        <li className='services_modal_service'>
                            <i className='bx bx-check'></i>
                            <p>Troubleshooting problems with performance.</p>
                        </li>

                        <li className='services_modal_service'>
                            <i className='bx bx-check'></i>
                            <p>Responsive web design.</p>
                        </li>
                       
                       </ul>


                       
                    </div>
                </div> 
            </div>

        </div>
    </section>
  )
}
