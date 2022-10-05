import React from 'react'

export default function SignUp() {
  return (
    <>
      <main className='main-bg main-height justify-end'>
        <div className="bg blur w50 text-light justify-center ypad-15">
          <form className='form-width gap-15 col'>
            <input type='text' name='name' className='br3 form-padding' placeholder='Nombre' /* onChange={handleInput} */></input>
            <input type='text' name='lastName' className='br3 form-padding' placeholder='Apellido' /* onChange={handleInput} */></input>
            <input type='url' name='photo' className='br3 form-padding' placeholder='Avatar' /* onChange={handleInput} */></input>
            <input type='text' name='email' className='br3 form-padding' placeholder='Email' /* onChange={handleInput} */></input>
            <input type='text' name='password' className='br3 form-padding' placeholder='Contraseña' /* onChange={handleInput} */></input>
            <button className='br3 form-padding submit-button ymar-30' /* onClick={handleSubmit} */>Registrarse</button>
            {/* <SignUpGoogle /> */}
          </form>
        </div>
      </main>
    </>
  )
}
