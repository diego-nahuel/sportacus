import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css'
import '../styles/Carousel.css'

export default function Carrusel() {

  const styles = {
    classCont: 'text-img-container',
    classImg: 'Carousel-img vh90',
    classTxt: 'shadow-y w100 text-img-bottom text-center font-xxl bg-light text-dark w-bold'
  }

  return (
    <>
      <div className='Carousel-container bg blur vh90 shadow-bottom'>
        <Swiper
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}>
          <SwiperSlide>
            <div className={styles.classCont}>
              <img className={styles.classImg} src='https://images5.alphacoders.com/816/816149.jpg' alt='cancha de tenis' />
              <span className={styles.classTxt}>Buscá y reserva canchas en la ciudad que necesites</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.classCont}>

              <img className={styles.classImg} src='/varios.jpg' alt='pelota de fútbol' />
              <span className={styles.classTxt}>Ofrecemos gran variedad de productos</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.classCont}>
              <img className={styles.classImg} src='/basquetball.jpg' alt='cancha de básquet' />
              <span className={styles.classTxt}>Contactanos para convertirte en socio</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.classCont}>
              <img className={styles.classImg} src='https://images.unsplash.com/photo-1592656094267-764a45160876?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dm9sbGV5YmFsbHxlbnwwfHwwfHw%3D&w=1000&q=80' alt='cancha de voley' />
              <span className={styles.classTxt}>Interactua con otros miembros de la comunidad</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
