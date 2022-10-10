import React, { useEffect, useRef, useState } from "react";
import * as jose from 'jose'
import { useSignUpMutation } from '../../features/authAPI'

export default function SignUpGoogle() {
    const buttonDiv = useRef(null)
    let [newUser, { data: resSignUp, error }] = useSignUpMutation()

    async function handleCredentialsResponse(response) {
        let userObject = jose.decodeJwt(response.credential)
        let data = {
            name: userObject.name,
            photo: userObject.photo,
            mail: userObject.mail,
            password: userObject.password,
            role: 'user',
            from: 'google'
        }
        newUser(data)
        console.log(newUser)
    }

    useEffect(() => {
        /*global google*/
        google.accounts.id.initialize({
            client_id: "1068548903596-69k8lne1u4pvshl1k1h5k712ektn8foc.apps.googleusercontent.com",
            callback: handleCredentialsResponse,
            context: 'signup'
        });
        google.accounts.id.renderButton(
            buttonDiv.current,
            { theme: "outline", size: "medium", text: "signup_with" }
        );
    }, [])

    return (
        <>
            <div className="justify-center" ref={buttonDiv}></div>
        </>
    )
}