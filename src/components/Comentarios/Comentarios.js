import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetFromFieldQuery } from '../../features/commentAPI';

export default function Comentarios(props) {
    const id = useParams()
    let {data:comments,isLoading,isSuccess}= useGetFromFieldQuery(id.id)
    if (isLoading) {
        comments=[]
    }else if (isSuccess) {
        comments=comments
    }
let commentField=comments.response

    const commentCard=(com)=>(
        <div className='Contenedor-Comentario row'>
        <div className='Usuario-Info col align-start pad-10 gap-5'>
            <img className='Usuario-IMG' src={com.user.photo} />
            <h4 className='align-center w-normal'>{com.user.name}</h4>
        </div>
        <div className='ydivider-dark transparent-25'></div>
        <p className='Comentario'>{com.comment}</p>
    </div>
    )

    return (
        <>
           {commentField?.map(commentCard)}
        </>
    )
}
