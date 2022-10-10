import React, { useEffect, useRef, useState } from "react";
import * as jose from 'jose'
import { useSignInMutation } from '../../features/authAPI'

export default function SignInGoogle() {
    const buttonDiv = useRef(null)
    let [newUser, { data: resSignIn, error }] = useSignInMutation()

    async function handleCredentialsResponse(response) {
        let userObject = jose.decodeJwt(response.credential)
        let data = {
            email: userObject.email,
            password: userObject.password,
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