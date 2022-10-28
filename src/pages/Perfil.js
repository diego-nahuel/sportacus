import React from 'react'
import '../styles/UserForm.css'
import '../styles/Comunidad.css'
import styles from '../components/Styles'

export default function Profile() {

  const user = {
    name: 'Ignacio',
    mail: 'nachogiusti94@gmail.com'
  }

  const formUserData = [
    { name: 'text', type: 'name', placeholder: 'Nombre' },
    { name: 'url', type: 'photo', placeholder: 'Avatar' }
  ]
  const userForm = (input) => <input type={input.type} name={input.name} className='br3 form-padding' placeholder={input.placeholder} /* onChange={handleInput} */></input>

  return (
    <>
      <main className='main-bg justify-center'>
        <div className="bg main-height blur container-width ypad-30 col align-center justify-start gap-30">

          <h2 className={styles.h2Profile}>Hola {user.name}, bienvenido a tu perfil!</h2>

          <div className='User-Info justify-center bg-dark br3 row gap-15 pad-15'>
            <img src='http://www.cmtv.com.ar/imagenes_artistas/2371.jpg?Porta' alt='User Avatar' className='Usuario-Avatar justify-center' />

            <div className='X-Profile-Divider transparent-25'></div>
            <div className='Y-Profile-Divider transparent-25'></div>

            <dl className='text-light w-bold'>
              <dt>Nombre: </dt>
              <dd className={styles.infoProfile}>{user.name}</dd>
              <dt>Mail: </dt>
              <dd className={styles.infoProfile}>{user.mail}</dd>
            </dl>

          </div>

          <form className='Form-Container w50 bg-dark pad-15 form-width br3 gap-15 col'>
            <h4 className='text-light'>Cambia tu información</h4>
            {formUserData.map(userForm)}
            <button className='br3 form-padding submit-button' /* onClick={handleSubmit} */>Guardar Cambios</button>
          </form>
        </div>
      </main>
    </>
  )
}