import React from 'react'

export default function SignUp() {

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
      <main className='main-bg main-height justify-end'>
        <div className="bg blur w50 text-light justify-center ypad-15">
          <form className='form-width gap-15 col'>
            {formSignUp.map(userForm)}
            <button className='br3 form-padding submit-button ymar-30' /* onClick={handleSubmit} */>Registrarse</button>
            {/* <SignUpGoogle /> */}
          </form>
        </div>
      </main>
    </>
  )
}
