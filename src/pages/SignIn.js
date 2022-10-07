import React, { useEffect, useState } from 'react';
import '../styles/UserForm.css'

export default function SignIn() {

  const formSignIn = [
    { name: 'email', type: 'mail', placeholder: 'Email' },
    { name: 'text', type: 'password', placeholder: 'Contraseña' },
  ]

  const formSignUp = [
    { name: 'text', type: 'name', placeholder: 'Nombre' },
    { name: 'url', type: 'photo', placeholder: 'Avatar' },
    { name: 'email', type: 'mail', placeholder: 'Email' },
    { name: 'text', type: 'password', placeholder: 'Contraseña' },
  ]
  const userForm = (input) => <input type={input.type} name={input.name} className='br3 form-padding' placeholder={input.placeholder} /* onChange={handleInput} */></input>

  const [openSignIn, setOpenSignIn] = useState(false)
  const [openSignUp, setOpenSignUp] = useState(false)
  const handleOpenSignIn = () => {
    if (openSignIn == true) {
      setOpenSignIn(false)
    } else {
      setOpenSignIn(true)
    }
  }
  const handleOpenSignUp = () => {
    if (openSignUp == true) {
      setOpenSignUp(false)
    } else {
      setOpenSignUp(true)
    }
  }

  return (
    <>
      <main className='main-bg main-height justify-end'>
        <div className="bg main-height blur container-width ypad-15 col align-center gap-30">
        {/* <button className='Form-Container form-padding br3 col align-center bg-dark' onClick={handleOpenSignIn}> */}
          {/* <h3 className='text-light'>Entra a tu cuenta</h3> */}
          {/* { openSignIn ? */}
            <form className='Form-Container w50 bg-dark pad-15 form-width br3 gap-15 col'>
            <h3 className='text-light'>Entra a tu cuenta</h3>
              {formSignIn.map(userForm)}
              <button className='br3 form-padding submit-button' /* onClick={handleSubmit} */>Iniciar Sesión</button>
              {/* <SignInGoogle /> */}
              </form> {/* : null} */}
            {/* </button> */}

          <div className='xdivider-light transparent-75 Form-Container'></div>
          
          {/* <button className='Form-Container form-padding br3 col align-center bg-dark' onClick={handleOpenSignUp}> */}
          {/* <h3 className='text-light'>Crea una cuenta</h3> */}
            {/* { openSignUp ? */}
            <form className='Form-Container w50 bg-dark pad-15 form-width br3 gap-15 col'>
          <h3 className='text-light'>Crea una cuenta</h3>
              {formSignUp.map(userForm)}
              <button className='br3 form-padding submit-button' /* onClick={handleSubmit} */>Registrarse</button>
              {/* <SignUpGoogle /> */}
            </form> {/* : null} */}
          {/* </button> */}
        </div>
      </main>
    </>
  )
}
