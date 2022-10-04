import React from 'react'

export default function NuevoComentario() {
    return (
        <>
            <div className='Contenedor-NuevoComentario col'>
                <textarea type='text' name='comentario' className='Textarea-NuevoComentario ' /* onChange={}  */ placeholder="Escriba su comentario"></textarea>
                <button className='Botom-NuevoComentario' /* onClick={} */ >Enviar</button>
            </div>
        </>
    )
}
