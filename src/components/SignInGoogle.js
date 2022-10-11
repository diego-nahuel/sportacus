import { useEffect, useRef, useState } from 'react'
import * as jose from 'jose'
import {useSignInMutation} from '../features/authAPI'

export default function SignInGoogle(props){
    const buttonDiv = useRef(null);
    let [signInUser, {data: resSignIn, error}] = useSignInMutation();
    
    async function handleCredentialResponse(response){
        let userObject = jose.decodeJwt(response.credential)
        let loginUserFromGoogle = {
            mail: userObject.mail,
            password: userObject.password,
            from: "google"
        }

        try{
            signInUser(loginUserFromGoogle)
            localStorage.setItem('user', JSON.stringify(signInUser.response))
        } catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        if(resSignIn){
            const isLogged = props.localUser(resSignIn.response.user)
        }
    }, [resSignIn])

    useEffect(() => {
        /* global google*/
        google.accounts.id.initialize({
            client_id: "1068548903596-69k8lne1u4pvshl1k1h5k712ektn8foc.apps.googleusercontent.com",
            callback: handleCredentialResponse,
            context: 'signin'
        });
        google.accounts.id.renderButton(
            buttonDiv.current,
            {theme: "outline", size: "medium", text: 'signin_with'}
        );
    }, [])
    
    return(
        <div>
            <div ref={buttonDiv}></div>
        </div>
    )
}