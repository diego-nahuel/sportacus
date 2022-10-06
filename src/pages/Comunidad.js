import React from 'react'
import '../styles/Comunidad.css'
import Comentarios from '../components/Comentarios/Comentarios'
import NuevoComentario from '../components/Comentarios/NuevoComentario'

function Comunidad() {
  return (
    <>
      <main className='main-height main-bg justify-center'>
        <div className='bg blur container-width col align-center ypad-15 gap-15'>
          <Comentarios />
          <Comentarios />
          <Comentarios />
          <Comentarios />
          <Comentarios />
          <Comentarios />
          <Comentarios />
          <Comentarios />
          <Comentarios />
          <Comentarios />
          <NuevoComentario />
        </div>
      </main>
    </>
  )
}

export default Comunidad