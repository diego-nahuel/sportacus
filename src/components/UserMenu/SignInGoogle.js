import React, { useEffect, useRef, useState } from "react";
import * as jose from 'jose'
import { useSignInMutation } from '../../features/authAPI'
import axios from 'axios'
import urlAPI from '../../API'
import { useNavigate } from 'react-router-dom';

export default function SignInGoogle() {
    const navigate = useNavigate()
    const buttonDiv = useRef(null)
    let [newUser, { data: resSignIn, error }] = useSignInMutation()

    async function handleCredentialsResponse(response) {
        let userObject = jose.decodeJwt(response.credential)
        let data = {
            mail: userObject.email,
            password: userObject.sub,
            from: 'google'
        }
        // newUser(data)
        // console.log(newUser)
        try {
            let response = await axios.post(urlAPI + '/users/signin', data)
            //console.log(response)
            localStorage.setItem('user', JSON.stringify(response.data.response.user))
            navigate("/", { replace: true }) //redirigí al index
          } catch (error) {
            console.log(error)
          }
    }

    useEffect(() => {
        /*global google*/
        google.accounts.id.initialize({
            client_id: "1068548903596-69k8lne1u4pvshl1k1h5k712ektn8foc.apps.googleusercontent.com",
            callback: handleCredentialsResponse,
            context: 'signin'
        });
        google.accounts.id.renderButton(
            buttonDiv.current,
            { theme: "outline", size: "medium", text: "signin_with" }
        );
    }, [])

    return (
        <>
            <div className="justify-center" ref={buttonDiv}></div>
        </>
    )
}