import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Link as LinkRouter } from 'react-router-dom';
import 'swiper/css'
import '../styles/Carousel.css'
import fields from '../actions/SportList'
import styles from '../components/Styles'

export default function CarouselFields() {

  const fieldList = (field) =>
    <>
      <SwiperSlide>
        <div className='flex-center'>
          <div className='Card col ypad-5 bg-light br3 shadow-y'>
            <h4 className={styles.cardName}>{field.name}</h4>
            <LinkRouter to={field.to}>
              <img className='IMG-Card' src={field.photo} />
            </LinkRouter>
            <ul className='col list-style-none text-dark xpad-10 min-h25 row space-between'>
              <li>Deporte: {field.sport}</li>
              <li className={styles.dividerDark}></li>
              <li>Ciudad: {field.city}</li>
            </ul>
          </div>
        </div>

      </SwiperSlide>
    </>

  return (
    <>
      <div className='Carousel-container'>
        <Swiper
          centeredSlides={true}
          autoplay={{ delay: 3250000, disableOnInteraction: false }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}>
          {fields.map(fieldList)}
        </Swiper>
      </div>
    </>
  )
}
