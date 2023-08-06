import React, {  } from 'react';
import './testimonials.css'
import Data from './Data'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';






function Testimonials() {
  return (
    <section className="testimonials section">
        <h2 className="section__title">Testimonial</h2>
        <span className='section__subtitle'>What i offer</span>

        <Swiper className="testimonials_container container"
        content='centered'
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 60,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 60,
          },
        }}
        modules={[Pagination]}
        >

            {Data.map(({image,title,description, id })=> (
                <SwiperSlide className="testimonials_card" key={id}>
                    <div className='imgName_container'>
                    <img src={image} alt="testimonial Pic" className="testimonials_img" />
                    <h3 className="testimonials_title">{title}</h3>
                    </div>
                    <p className="testimonials_description">{description}</p>
                </SwiperSlide>
            ))}

        </Swiper>

    </section>
  )
}

export default Testimonials