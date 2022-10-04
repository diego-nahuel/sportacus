import React from 'react'

export default function NuevoComentario() {
    return (
        <>
            <div className='Contenedor-NuevoComentario col'>
                <textarea type='text' name='comentario' className='Textarea-NuevoComentario ' /* onChange={}  */ placeholder="Escriba su comentario"></textarea>
                <button className='Boton-NuevoComentario submit-button' /* onClick={} */ >Enviar</button>
            </div>
        </>
    )
}
