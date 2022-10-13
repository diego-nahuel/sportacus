import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Link as LinkRouter } from 'react-router-dom';
import 'swiper/css'
import '../styles/Carousel.css'
import products from '../actions/ProductList'
import styles from '../components/Styles'

export default function CarouselProducts() {

  const productList = (product) =>
    <>
      <SwiperSlide>
        <div className='flex-center'>
          <div className='Card col ypad-5 bg-light br3 shadow-y'>
            <h4 className={styles.cardName}>{product.name}</h4>
            <LinkRouter>
              <img className='IMG-Card' src={product.photo} />
            </LinkRouter>
            <ul className='col list-style-none text-dark xpad-10 min-h25 row space-between'>
              <li>Deporte: {product.sport}</li>
              <li className={styles.dividerDark}></li>
              <li>Stock: {product.stock}</li>
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
          autoplay={{ delay: 3500000, disableOnInteraction: false }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}>
          {products.map(productList)}
        </Swiper>
      </div>
    </>
  )
}
