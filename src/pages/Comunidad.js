import React from 'react'
import '../styles/Comunidad.css'
import Comentarios from '../components/Comentarios/Comentarios'
import NuevoComentario from '../components/Comentarios/NuevoComentario'
import UpdateComment from '../components/Comentarios/UpdateComment'
import DeleteComment from '../components/Comentarios/DeleteComment'

function Comunidad() {

  const commentsArray = [
    { name: 'Jere', comment: 'Holi', userPhoto: 'https://smsh-14-140934-juc1ugur1qwqqqo4.stackpathdns.com/953582/wp-content/uploads/2018/01/better-smile-tips-technique-eyes.jpg?lossy=0&strip=1&webp=1' },
    { name: 'Diego', comment: 'Que opinan del sitio? Me encanta', userPhoto: 'https://i.pinimg.com/564x/23/d1/e7/23d1e78c732a2d73e346cad80403b11f.jpg' },
    { name: 'Ignacio', comment: 'Lindo sitio, mucha variedad de productos', userPhoto: 'http://www.cmtv.com.ar/imagenes_artistas/2371.jpg?Porta' },
    { name: 'Juan', comment: 'Ideal si buscas un lugar donde jugar con amigos', userPhoto: 'https://pbs.twimg.com/media/FeaHqTaWYAA4XUr?format=jpg&name=large' }
  ]

  let role = ""
  if (localStorage.getItem("user")) {
      role = JSON.parse(localStorage.getItem("user")).role
  }

  const commentsFunction = (comment) =>
    <>
      <div className='Contenedor-Comentario row bg-light text-dark'>
        <div className='Usuario-Info col align-start pad-10 gap-5'>
          <img className='Usuario-IMG' src={comment.userPhoto} />
          <h4 className='align-center w-normal'>{comment.name}</h4>
        </div>
        <div className='ydivider-dark transparent-50'></div>
        <p className='Comentario w100'>{comment.comment}</p>
        <div className='align-end gap-5'>
                {role === "admin" ? <UpdateComment /> : null}
                {role === "admin" ? <DeleteComment /> : null}
            </div>
      </div>
    </>

  return (
    <>
      <main className='main-bg justify-center'>
        <div className='main-height bg blur container-width col align-center xpad-15 ypad-15 gap-15'>
          <h2 className='align-start text-light'>Comunidad</h2>
          <div className='xdivider-light ydivider-light transparent-50 br360 w100'></div>
          {commentsArray.map(commentsFunction)}
          <NuevoComentario />
        </div>
      </main>
    </>
  )
}

export default Comunidad