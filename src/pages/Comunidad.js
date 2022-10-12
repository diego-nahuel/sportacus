import React from 'react'
import '../styles/Comunidad.css'
import Comentarios from '../components/Comentarios/Comentarios'
import NuevoComentario from '../components/Comentarios/NuevoComentario'

function Comunidad() {

  const commentsArray = [
    { name: 'Ignacio', comment: 'Holi', userPhoto: 'https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png' },
    { name: 'Jere', comment: 'Holi', userPhoto: 'https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png' },
    { name: 'Diego', comment: 'Holi', userPhoto: 'https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png' },
    { name: 'Juan', comment: 'Holi', userPhoto: 'https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png' }
  ]
  const commentsFunction = (comment) =>
    <>
      <div className='Contenedor-Comentario row bg-dark text-light'>
        <div className='Usuario-Info col align-start pad-10 gap-5'>
          <img className='Usuario-IMG' src={comment.userPhoto} />
          <h4 className='align-center w-normal'>{comment.name}</h4>
        </div>
        <div className='ydivider-light transparent-25'></div>
        <p className='Comentario'>{comment.comment}</p>
      </div>
    </>

  return (
    <>
      <main className='main-height main-bg justify-center'>
        <div className='bg blur container-width col align-center ypad-15 gap-15'>
          {commentsArray.map(commentsFunction)}
          <NuevoComentario />
        </div>
      </main>
    </>
  )
}

export default Comunidad