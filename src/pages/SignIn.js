import React from 'react'
import '../styles/UserForm.css'

export default function SignIn() {
  return (
    <>
      <main className='main-bg main-height justify-end'>
        <div className="bg main-height blur w50 ypad-15 col align-center gap-30">
          <form className='Form-Container bg-dark pad-15 form-width w50 br3 gap-15 col'>
            <h4 className='text-light'>Entra a tu cuenta</h4>
            <input type='text' name='email' className='br3 form-padding' placeholder='Email' /* onChange={handleInput} */></input>
            <input type='text' name='password' className='br3 form-padding' placeholder='Contraseña' /* onChange={handleInput} */></input>
            <button className='br3 form-padding submit-button' /* onClick={handleSubmit} */>Iniciar Sesión</button>
            {/* <SignInGoogle /> */}
          </form>
          <div className='xdivider w75'></div>
          <form className='Form-Container bg-dark pad-15 form-width w50 br3 gap-15 col'>
            <h4 className='text-light'>Crea una cuenta</h4>
            <input type='text' name='name' className='br3 form-padding' placeholder='Nombre' /* onChange={handleInput} */></input>
            <input type='text' name='lastName' className='br3 form-padding' placeholder='Apellido' /* onChange={handleInput} */></input>
            <input type='url' name='photo' className='br3 form-padding' placeholder='Avatar' /* onChange={handleInput} */></input>
            <input type='text' name='email' className='br3 form-padding' placeholder='Email' /* onChange={handleInput} */></input>
            <input type='text' name='password' className='br3 form-padding' placeholder='Contraseña' /* onChange={handleInput} */></input>
            <button className='br3 form-padding submit-button' /* onClick={handleSubmit} */>Registrarse</button>
            {/* <SignUpGoogle /> */}
          </form>
        </div>

      </main>
    </>
  )
}
