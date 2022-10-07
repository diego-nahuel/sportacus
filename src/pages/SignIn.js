import { useSignInMutation } from '../features/authAPI';
import React, { useState } from 'react';
import { addUser } from '../features/userSlice';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Alert from '../components/Alert';
import '../styles/UserForm.css';

export default function SignIn() {

  const dispatch = useDispatch();
  const formSignIn = [
    { name: 'mail', type: 'email', placeholder: 'Email' },
    { name: 'password', type: 'password', placeholder: 'Contraseña' },
  ]
  const [user, setUser] = useState({
    mail: "", password: "", from: "form"
  })
  const userForm = (input, index) => <input type={input.type} name={input.name} key={index} className='br3 form-padding' placeholder={input.placeholder}  onChange={handleInput} autoComplete="on"/>

  /* const [openSignIn, setOpenSignIn] = useState(false)
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
  } */
  const handleInput = e => {
    setUser({
        ...user, [e.target.name]: e.target.value
    });
  };
  const [signIn] = useSignInMutation();
  let Navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      let {data, error} = await signIn(user);
      if(error){
          Alert("error",error.data.message)
      } else {
          localStorage.setItem("token", data.response.token);
          dispatch(addUser(data.response.user));
          Alert("success",data.message)
          Navigate("/");
      }
    };
  return (
    <>
      <main className='main-bg main-height justify-end'>
        <div className="bg main-height blur container-width ypad-15 col align-center gap-30">
        {/* <button className='Form-Container form-padding br3 col align-center bg-dark' onClick={handleOpenSignIn}> */}
          {/* <h3 className='text-light'>Entra a tu cuenta</h3> */}
          {/* { openSignIn ? */}
            <form className='Form-Container w50 bg-dark pad-15 form-width br3 gap-15 col' onSubmit={handleSubmit}>
            <h3 className='text-light'>Entra a tu cuenta</h3>
              {formSignIn.map(userForm)}
              <button className='br3 form-padding submit-button' type='submit'>Iniciar Sesión</button>
              {/* <SignInGoogle /> */}
              </form>
 
        </div>
      </main>
    </>
  )
}
