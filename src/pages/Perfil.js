import React from 'react'
import '../styles/UserForm.css'
import '../styles/Comunidad.css'

export default function Profile() {

  const user = {
    name: 'Lionel',
    lastName: 'Messi',
    mail: 'messilio@gmail.com',
    class: 'w-normal bpad-10'
  }

  const formUserData = [
    { name: 'text', type: 'name', placeholder: 'Nombre' },
    { name: 'text', type: 'lastName', placeholder: 'Apellido' },
    { name: 'url', type: 'photo', placeholder: 'Avatar' }
  ]
  const userForm = (input) => <input type={input.type} name={input.name} className='br3 form-padding' placeholder={input.placeholder} /* onChange={handleInput} */></input>
  
  return (
    <>
      <main className='main-bg main-height justify-center'>
        <div className="bg main-height blur container-width ypad-30 col align-center justify-start gap-30">

          <h2 className='text-light'>Hola {user.name}, bienvenido a tu perfil!</h2>

          <div className='User-Info justify-center bg-dark br3 row gap-15 pad-15'>
            <img src='https://wallpapercave.com/wp/wp4793571.jpg' alt='User Avatar' className='Usuario-Avatar justify-center' />

            <div className='X-Profile-Divider transparent-25'></div>
            <div className='Y-Profile-Divider transparent-25'></div>

            <dl className='text-light w-bold w100'>
              <dt>Nombre: </dt>
              <dd className={user.class}>{user.name}</dd>
              <dt>Apellido: </dt>
              <dd className={user.class}>{user.lastName}</dd>
              <dt>Mail: </dt>
              <dd className={user.class}>{user.mail}</dd>
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