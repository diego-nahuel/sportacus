import React from 'react'
import '../styles/Comunidad.css'
import Comentarios from '../components/Comentarios/Comentarios'
import NuevoComentario from '../components/Comentarios/NuevoComentario'
import UpdateComment from '../components/Comentarios/UpdateComment'
import DeleteComment from '../components/Comentarios/DeleteComment'

function Comunidad() {

  const commentsArray = [
    { name: 'Ignacio', comment: 'Holi', userPhoto: 'https://media.distractify.com/brand-img/payNR5Jfb/0x0/is-korra-the-last-avatar-1595380417772.png' },
    { name: 'Jere', comment: 'Holi', userPhoto: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2022/03/avatar-facebook-2632445.jpg?itok=humq0Qgg' },
    { name: 'Diego', comment: 'Holi', userPhoto: 'https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png' },
    { name: 'Juan', comment: 'Holi', userPhoto: 'https://www.clarin.com/img/2020/08/16/avatar-the-last-airbender-foto___pck4_8liS_1256x620__2.jpg#1597613994196' }
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
        <div className='main-height bg blur container-width col align-center ypad-15 gap-15'>
          {commentsArray.map(commentsFunction)}
          <NuevoComentario />
        </div>
      </main>
    </>
  )
}

export default Comunidad