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
              <h2 className={styles.h2}>Canchas Populares</h2>
              <CarouselFields />
            </div>
            <div className={styles.dividerLight}></div>
            <div className='w100-50'>
              <h2 className={styles.h2}>Productos Destacados</h2>
              <CarouselProducts />
            </div>
          </div>
          <div className='xdivider-light transparent-50 tmar-10' ></div>
          <h2 className='h2 text-center'>Acerca de SPORTACUS</h2>
          <div className='br3 pad-10 bg-light text-dark text-center col gap-15 w100 max-w700 align-center'>
              <h3>Seguro alguna vez te paso o escuchaste:</h3>
              <p className='text-indent'>
                Quiero jugar hoy pero, no conozco una cancha... No tengo un equipo para jugar... Nos falta una o varias personas para completar equipo... Donde entrenar? Como llego a esa cancha?
                <br/>
                <span className='sportacus'>SPORTACUS</span> facilita, entretiene e informa a sus usarios sobre las diferentes alternativas para practicar el deporte que tengas mas ganas de jugar. En un solo lugar, los usuarios pueden encontrar los datos de una cancha o complejo que estan buscando, como asi tambien obtener informacion relevante para decidir cuando, donde, y con quien jugar
              </p>
              <div className='xdivider-dark transparent-25 tmar-10 w100' ></div>
              <h3>Mision</h3>
              <p>
                Nuestra mision consiste en promover el deporte y la salud, y conectar a todas aquellas personas con ganas de realizar el deporte que mas les gusta, en las canchas mas cercanas a tu ubicacion, de manera compartida con gente que conozcas, o no...
              </p>
              <div className='xdivider-dark transparent-25 tmar-10 w100' ></div>
              <h3>Productos</h3>
              <p>
                Tambien contamos con un increible apartado de productos. Ingresa para consultar el stock y la alta variedad en articulos deportivos
              </p>
              <div className='xdivider-dark transparent-25 tmar-10 w100' ></div>
              <h3>Nuevas Canchas y Productos</h3>
              <p>
                Si sos dueño de un complejo o cancha, o queres vender tus productos, y queres que aparezcan en <span className='sportacus'>SPORTACUS</span>, comunicate con nosotros a traves de nuestro mail: <a href="mailto:sportacusdnjj2022@gmail.com">sportacusdnjj2022@gmail.com</a>
              </p>
          </div>
        </div>
      </main>
    </>
  )
}
