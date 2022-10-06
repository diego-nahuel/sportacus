import React from 'react'
import '../styles/UserForm.css'

export default function SignIn() {

  const formSignIn = [
    { name: 'email', type: 'mail', placeholder: 'Email' },
    { name: 'text', type: 'password', placeholder: 'Contraseña' },
  ]

  const formSignUp = [
    { name: 'text', type: 'name', placeholder: 'Nombre' },
    { name: 'text', type: 'lastName', placeholder: 'Apellido' },
    { name: 'url', type: 'photo', placeholder: 'Avatar' },
    { name: 'email', type: 'mail', placeholder: 'Email' },
    { name: 'text', type: 'password', placeholder: 'Contraseña' },
  ]
  const userForm = (input) => <input type={input.type} name={input.name} className='br3 form-padding' placeholder={input.placeholder} /* onChange={handleInput} */></input>
  return (
    <>
      <main className='main-bg main-height justify-center'>
        <div className="bg main-height blur w50 ypad-15 col align-center gap-30">
          <form className='Form-Container w50 bg-dark pad-15 form-width br3 gap-15 col'>
            <h4 className='text-light'>Entra a tu cuenta</h4>
            {formSignIn.map(userForm)}
            <button className='br3 form-padding submit-button' /* onClick={handleSubmit} */>Iniciar Sesión</button>
            {/* <SignInGoogle /> */}
          </form>

          <div className='xdivider w50'></div>

          <form className='Form-Container w50 bg-dark pad-15 form-width br3 gap-15 col'>
            <h4 className='text-light'>Crea una cuenta</h4>
            {formSignUp.map(userForm)}
            <button className='br3 form-padding submit-button' /* onClick={handleSubmit} */>Registrarse</button>
            {/* <SignUpGoogle /> */}
          </form>
        </div>
      </main>
    </>
  )
}
