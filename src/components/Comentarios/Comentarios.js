import React from 'react'

export default function Comentarios() {

    const user = {
        name: 'Lionel',
    }
    return (
        <>
            <div className='Contenedor-Comentario row'>
                <div className='Usuario-Info col align-start pad-10 gap-5'>
                    <img className='Usuario-IMG' src='https://static2.abc.es/media/play/2020/09/29/avatar-kE4H--1024x512@abc.jpeg' />
                    <h4 className='align-center w-normal'>{user.name}</h4>
                </div>
                <div className='ydivider-dark transparent-25'></div>
                <p className='Comentario'>Co mmentCo mmentCommentCommentCommentComment CommentCommentCommentdawdntComm mmenentCo mmentCommentCommentCommentComment CommentCommentCommentdawdntComm mmenentCo mmentCommentCommentCommentComment CommentCommentCommentdawdntComm mmen</p>
            </div>
        </>
    )
}
