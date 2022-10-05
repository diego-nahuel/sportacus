import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css'
import '../styles/Carousel.css'

export default function Carrusel() {
  return (
    <>
      <div className='Carousel-container'>
        <Swiper
        centeredSlides={true}
        autoplay={{delay:3000, disableOnInteraction:false}}
        navigation={true} 
        modules={[Autoplay, Pagination, Navigation]}>
          {/* <SwiperSlide>
            <img className='Carousel-img' src= 'https://cdn.pixabay.com/photo/2020/06/16/20/07/football-5307071_960_720.jpg' alt='cancha de futbol'/>
          </SwiperSlide> */}
          <SwiperSlide>
            <img className='Carousel-img' src= 'https://img.freepik.com/fotos-premium/balon-futbol-realista-o-patron-basico-futbol-campo-hierba-verde-luz-solar-sol_387624-128.jpg?w=1800' alt='pelota de fútbol'/>
          </SwiperSlide>
          <SwiperSlide>
            <img className='Carousel-img' src= 'https://www.ricoh.es/media/Tennis-Banner_tcm77-13634.jpg' alt='cancha de tenis'/>
          </SwiperSlide>
          <SwiperSlide>
            <img className='Carousel-img' src= '/basquetball.jpg' alt='cancha de básquet'/>
          </SwiperSlide>
          <SwiperSlide>
            <img className='Carousel-img' src= 'https://integralspor.com/uploads/facility/original/voleybol-sahalari-27752.jpg' alt='cancha de voley'/>
          </SwiperSlide>
        </Swiper>

      </div>
    </>
  )
}
