import { useSignInMutation } from '../features/authAPI';
import React, { useState } from 'react';
import { addUser } from '../features/userSlice';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Alert from '../components/Alert';
import '../styles/UserForm.css';

export default function ModalSignIn() {
    const dispatch = useDispatch();
    const formSignIn = [
        { name: 'mail', type: 'email', placeholder: 'Email' },
        { name: 'password', type: 'password', placeholder: 'Contraseña' },
    ]
    const [user, setUser] = useState({
        mail: "", password: "", from: "form"
    })
    const userForm = (input, index) => <input type={input.type} name={input.name} key={index} className='br3 form-padding' placeholder={input.placeholder} onChange={handleInput} autoComplete="on" />

    const handleInput = e => {
        setUser({
            ...user, [e.target.name]: e.target.value
        });
    };

    const [signIn] = useSignInMutation();
    let Navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        let { data, error } = await signIn(user);
        if (error) {
            Alert("error", error.data.message)
        } else {
            localStorage.setItem("token", data.response.token);
            dispatch(addUser(data.response.user));
            Alert("success", data.message)
            Navigate("/");
        }
    };

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
                            <h3>Inicia Sesión</h3>
                            <span className='Close-Button' onClick={handleCloseModal}>X</span>
                        </div>
                        <form className='br3 gap-15 col' onSubmit={handleSubmit}>
                            {formSignIn.map(userForm)}
                            <button className='br3 form-padding submit-button' type='submit'>Iniciar Sesión</button>
                            {/* <SignInGoogle /> */}
                        </form>
                    </div>
                </div> : null}
        </>
    )
}