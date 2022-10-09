import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSingUpMutation } from '../features/authAPI'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
import SignUpGoogle from '../components/SignUpGoogle'

export default function SignUp() {

  const formSignUp = [
    { name: 'text', type: 'name', placeholder: 'Nombre' },
    { name: 'url', type: 'photo', placeholder: 'Avatar' },
    { name: 'email', type: 'mail', placeholder: 'Email' },
    { name: 'text', type: 'password', placeholder: 'Contraseña' },
  ]
  const [user, setUser] = useState({
    name: "", photo: "", mail: "", password: "", role: "user", from: "form"
  })
  const userForm = (input) => <input type={input.type} name={input.name} className='br3 form-padding' placeholder={input.placeholder} onChange={handleInput} />

  const handleInput = e => {
    setUser({
      ...user, [e.target.name]: e.target.value
    })
  }
  const [signUp] = useSingUpMutation()
  let Navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    let { data, error } = await signUp(user)
    if (error) {
      // Alerta
    } else if (!data.success) {
      // Alerta
    }
    else {
      //Alerta
      Navigate("/");
    }
  }

  return (
    <>
      <main className='main-bg main-height justify-end'>
        <div className="bg blur w50 text-light justify-center ypad-15">
          <form className='form-width gap-15 col' onSubmit={handleSubmit}>
            <SignUpGoogle />
            {formSignUp.map(userForm)}
            <button className='br3 form-padding submit-button ymar-30' type='submit'>Registrarse</button>
          </form>
        </div>
      </main>
    </>
  )
}
