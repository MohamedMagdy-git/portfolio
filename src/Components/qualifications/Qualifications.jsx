import {useState} from 'react'
import './qualifications.css'

export const Qualifications = () => {
    let [qualtoggle, setQualtoggle] = useState(1);


  return (
    <section className='qualifications section' id='Portfolio'>

        <h2 className="section__title">Qualification</h2>
        <span className='section__subtitle'>My personel journey</span>

        <div className="qualifications_container container">
            <div className="qualifications_tap">

                <div className="qualifications_button button--flex" onClick={()=> setQualtoggle(1)}>
                <i className="uil uil-graduation-cap"></i>Education
                </div>

                <div className="qualifications_button button--flex" onClick={()=> setQualtoggle(2)}>
                    <i className="uil uil-bag-alt"></i>Experience
                </div>

            </div>

            <div className="qualifications_sections">
                {/* content  Education*/}
                <div className={qualtoggle === 1 ? "qualifications_content_active" : "qualifications_content "}>
                    {/* data 1 */}
                    <div className="qualifications_data">
                        <div>
                            <h3 className="qualifications_title">study of computer science</h3>
                            <span className="qualifications_subtitle">At 10th of Ramadan Institute</span>
                        

                            <div className="qualifications_calendar">
                                <i className="uil uil-calendar-alt"></i> 2020
                            </div>

                        </div>

                        <div>
                            <span className="qualifications_rouned"></span>
                            <span className="qualifications_line"></span>
                        </div>
                        <div></div>

                    </div>
                    {/* data 2 */}
                    <div className="qualifications_data">
                        <div></div>
                        <div>
                            <span className="qualifications_rouned"></span>
                            <span className="qualifications_line"></span>
                        </div>

                        <div>
                            <h3 className="qualifications_title">Front End Developer Training</h3>
                            <span className="qualifications_subtitle">At Egyptian Center for Technology</span>
                            

                            <div className="qualifications_calendar">
                                <i className="uil uil-calendar-alt"></i> 2021
                            </div>
                        </div>

                        
                    </div>

                    {/* data 3 */}
                    <div className="qualifications_data">
                        <div>
                            <h3 className="qualifications_title">study of computer science</h3>
                            <span className="qualifications_subtitle">At 10th of Ramadan Institute</span>
                            

                            <div className="qualifications_calendar">
                                <i className="uil uil-calendar-alt"></i> Still to 2024
                            </div>
                        </div>

                        <div>
                            <span className="qualifications_rouned"></span>
                            <span className="qualifications_line"></span>
                        </div>

                    </div>
                    <div></div>

                    </div>

                {/* content  Experience*/}
                <div className={qualtoggle === 2 ? "qualifications_content_active" : "qualifications_content "}>
                    {/* data 1 */}
                    <div className="qualifications_data">
                        <div>
                            <h3 className="qualifications_title">Bisic Front-End</h3>
                            <span className="qualifications_subtitle">At Egyptian Center for Technology</span>

                            <div className="qualifications_calendar">
                                <i className="uil uil-calendar-alt"></i> 2021
                            </div>
                        </div>
                        <div>
                            <span className="qualifications_rouned"></span>
                            <span className="qualifications_line"></span>
                        </div>
                        <div></div>

                    </div>
                    {/* data 2 */}
                    <div className="qualifications_data">
                    <div></div>
                        <div>
                            <span className="qualifications_rouned"></span>
                            <span className="qualifications_line"></span>
                        </div>

                        <div> 
                            <h3 className="qualifications_title">Study Js advanced</h3>
                            <span className="qualifications_subtitle">Self study</span>

                            <div className="qualifications_calendar">
                                <i className="uil uil-calendar-alt"></i> 2022
                            </div>
                        </div>   
                        
                    </div>
                                        {/* data 3 */}
                    <div className="qualifications_data">
                        <div>   
                            <h3 className="qualifications_title">Create Projects</h3>
                            <span className="qualifications_subtitle">To increase experience</span>

                            <div className="qualifications_calendar">
                                <i className="uil uil-calendar-alt"></i> 2022 - to now
                            </div>
                        </div>     
                        <div>
                            <span className="qualifications_rouned"></span>
                            <span className="qualifications_line"></span>
                        </div>
                        <div></div>

                    </div>
                    {/* data 4 */}
                    <div className="qualifications_data">
                    <div></div>
                        <div>
                            <span className="qualifications_rouned"></span>
                            <span className="qualifications_line"></span>
                        </div>
                        <div>
                            <h3 className="qualifications_title">React js</h3>
                            <span className="qualifications_subtitle">study & implementation</span>

                            <div className="qualifications_calendar">
                                <i className="uil uil-calendar-alt"></i> 2023
                            </div>
                        </div>

                    </div>
                            {/* data 5 */}
                        <div className="qualifications_data">
                            <div>
                                <h3 className="qualifications_title">Redux & ReduxToolkit</h3>
                                <span className="qualifications_subtitle">To increase experience</span>

                                <div className="qualifications_calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualifications_rouned"></span>
                                <span className="qualifications_line"></span>
                            </div>
                            <div></div>

                        </div>
                        
                        <div className="qualifications_data">
                            <div></div>
                            <div>
                                <span className="qualifications_rouned"></span>
                                <span className="qualifications_line"></span>
                            </div>
                            <div>
                                <h3 className="qualifications_title">Git & GitHub, npm</h3>
                                <span className="qualifications_subtitle">command line study</span>

                                <div className="qualifications_calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023
                                </div>
                            </div>

                        </div>

                    
                    
                </div>
        
            </div>
        </div>

    </section>
  )
}
