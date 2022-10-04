import React from 'react'
import '../styles/Comunidad.css'
import Comentarios from '../components/Comentarios/Comentarios'
import NuevoComentario from '../components/Comentarios/NuevoComentario'

function Comunidad() {
  return (
    <>
      <div className='Contenedor-Comunidad col main-height main-bg align-center gap-15'>
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
    </>
  )
}

export default Comunidad