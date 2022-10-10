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

/*  */
const [closeModal, setCloseModal] = useState(true)
const handleCloseModal = () => {
    if (closeModal == false) {
        setCloseModal(true)
    } else {
        setCloseModal(false)
    }
}
/*  */

  return (
    <>
    {closeModal ?
        <div className='Modal-User w100 flex-center'>
            <div className='Form-Container w50 bg-dark pad-15 form-width br3 gap-10 col'>
                <div className='row space-between text-light'>
                    <h3>Crea una cuenta</h3>
                    <span className='Close-Button' onClick={handleCloseModal}>X</span>
                </div>
                <form className='br3 gap-15 col' onSubmit={handleSubmit}>
                    {formSignUp.map(userForm)}
                    <button className='br3 form-padding submit-button' type='submit'>Registrarse</button>
                    {/* <SignInGoogle /> */}
                </form>
            </div>
        </div> : null}
</>
  )
}
