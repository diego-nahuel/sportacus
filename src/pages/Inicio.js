import React from 'react'
import Carrusel from '../components/Carrusel'
import '../styles/Inicio.css'
import CarouselFields from '../components/CarouselFields'
import CarouselProducts from '../components/CarouselProducts'
import styles from '../components/Styles'

export default function Home() {

  return (
    <>
      <main className='main-height main-bg align-center col text-light'>
        <h1 className='Slogan01 w100 justify-center text-center bg-light p-sticky col-row-768 gap-5'>Todas las canchas<span className='Slogan02'> en un solo lugar</span></h1>
        <Carrusel />
        {/* ------------------------------------Cards------------------------------------ */}
        <div className='container-width bg blur pad-10 col gap-5'>
          <div className='col-row-768'>
            <div className='w100-50'>
              <h2 className={styles.h2Home}>Canchas Populares</h2>
              <CarouselFields />
            </div>
            <div className={styles.dividerLight}></div>
            <div className='w100-50'>
              <h2 className={styles.h2Home}>Productos Destacados</h2>
              <CarouselProducts />
            </div>
          </div>
          <div className='xdivider-light transparent-50 tmar-10' ></div>
          <h2 className='text-center'>Titulo</h2>
          <div className='br3 pad-10 bg-light text-dark col gap-15 w100 max-w700 align-center'>
            <p className='text-indent'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis lectus tellus. Vestibulum ut mattis nunc, in sodales urna. Proin ipsum purus, vehicula ut tempus quis, congue ut mi. Pellentesque eget ante eros. Morbi tristique tincidunt finibus. Nullam malesuada aliquet ultrices.
            </p>
            <p>
              Nam ut quam non ligula pretium rhoncus. Nullam metus leo, ullamcorper eu odio in, fermentum malesuada risus. In convallis viverra nibh, quis scelerisque ligula scelerisque id. Vivamus gravida ac lacus sed rhoncus. Fusce vitae eros metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla venenatis condimentum ligula sed semper. Suspendisse potenti. Curabitur pulvinar pulvinar nulla in porta.
            </p>
            <p>
              Nam ut quam non ligula pretium rhoncus. Nullam metus leo, ullamcorper eu odio in, fermentum malesuada risus. In convallis viverra nibh, quis scelerisque ligula scelerisque id. Vivamus gravida ac lacus sed rhoncus. Fusce vitae eros metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla venenatis condimentum ligula sed semper. Suspendisse potenti. Curabitur pulvinar pulvinar nulla in porta.
            </p>
            <p>
              Nam ut quam non ligula pretium rhoncus. Nullam metus leo, ullamcorper eu odio in, fermentum malesuada risus. In convallis viverra nibh, quis scelerisque ligula scelerisque id. Vivamus gravida ac lacus sed rhoncus. Fusce vitae eros metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla venenatis condimentum ligula sed semper. Suspendisse potenti. Curabitur pulvinar pulvinar nulla in porta.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
