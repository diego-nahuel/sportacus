import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Alert from '../Alert';
import { useSignUpMutation } from '../../features/authAPI'
import SignUpGoogle from './SignUpGoogle'
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
  const [signUp] = useSignUpMutation()
  let Navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    let { data, error } = await signUp(user)
    if (error) {
      Alert("error", error.data.message)
      console.log(error);
    } else if (!data.success) {
      Alert("error", data.message);
    }
    else {
      Alert("success", data.message);
      Navigate("/");
    }
  };

  /*  */
  const [closeModal, setCloseModal] = useState(true);
  const handleCloseModal = () => {
    if (closeModal == false) {
      setCloseModal(true)
    } else {
      setCloseModal(false)
    }
  };

  const modalStopPropagation = event => {
    event.stopPropagation();
  };
  /*  */

  return (
    <>
      {closeModal ?
        <div className='Modal-User w100 flex-center' onClick={handleCloseModal}>
          <div className='Form-Container w50 bg-dark pad-15 form-width br3 gap-10 col' onClick={modalStopPropagation}>
              <h3 className='text-light'>Crea una cuenta</h3>
            <form className='br3 gap-15 col' onSubmit={handleSubmit}>
              {formSignUp.map(userForm)}
              <div className='User-Button-Container'>
                <button className='User-Button br3 form-padding submit-button' type='submit'>Registrarse</button>
                <SignUpGoogle />
              </div>
            </form>
          </div>
        </div> : null}
    </>
  )
}
