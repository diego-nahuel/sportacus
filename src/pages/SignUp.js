import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Alert from '../components/Alert'
import { useSingUpMutation } from '../features/authAPI'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

export default function SignUp() {

  const formSignUp = [
    { name: 'name', type: 'text', placeholder: 'Nombre' },
    { name: 'photo', type: 'url', placeholder: 'Avatar' },
    { name: 'mail', type: 'email', placeholder: 'Email' },
    { name: 'password', type: 'password', placeholder: 'Contraseña' },
  ]

  const [user, setUser] = useState({
    name: "",
    photo: "",
    mail: "",
    password: "",
    role: "user",
    from: "form"
  })

  const userForm = (input, index) => <input type={input.type} name={input.name} className='br3 form-padding' placeholder={input.placeholder} key={index} onChange={handleInput} />

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
      Alert("error", error.data.message)
      console.log(error);
    } else if (!data.success) {
      Alert("error",data.message);
    }
    else {
      Alert("success",data.message);
      Navigate("/");
    }
  }

  return (
    <>
      <main className='main-bg main-height justify-end'>
        <div className="bg blur w50 text-light justify-center ypad-15">
          <form className='form-width gap-15 col' onSubmit={handleSubmit}>
            {formSignUp.map(userForm)}
            <button className='br3 form-padding submit-button ymar-30' type='submit'>Registrarse</button>
            {/* <SignUpGoogle /> */}
          </form>
        </div>
      </main>
    </>
  )
}
