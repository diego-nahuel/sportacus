import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import {useCreateCommentMutation} from '../../features/commentApi'

export default function NuevoComentario() {
    let id = useParams()
    let [NewCommentRedux, {data: userRedux}] = useCreateCommentMutation()
    const action = () =>{
        let body = {
            comment: commentRef.current.value,
            field: id.id
        }
        console.log(body)
        NewCommentRedux(body)
    }

    let commentRef = useRef();
    return (
        <>
            <div className='Contenedor-NuevoComentario col'>
                <textarea type='text' name='comentario' className='Textarea-NuevoComentario ' ref={commentRef} placeholder="Escriba su comentario"></textarea>
                <button className='Boton-NuevoComentario submit-button' onClick={action} type='submit' >Enviar</button>
            </div>
        </>
    )
}
