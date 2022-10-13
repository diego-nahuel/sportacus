import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useGetFromFieldQuery } from '../../features/commentAPI';
import { useSelector } from "react-redux"
import UpdateComment from '../Comentarios/UpdateComment'
import DeleteComment from '../Comentarios/DeleteComment'
import '../../styles/Comment.css'

export default function Comentarios(props) {
    const id = useParams()
    const userRole = useSelector(state => state.user.role)
    const [comment, setComment] = useState([])
    const [editedComment, setEditedComment] = useState([])
    let { data: comments, isLoading, isSuccess } = useGetFromFieldQuery(id.id)
    if (isLoading) {
        comments = []
    } else if (isSuccess) {
        comments = comments
    }
    let commentField = comments.response

    let role = ""
    if (localStorage.getItem("user")) {
        role = JSON.parse(localStorage.getItem("user")).role
    }

    const commentCard = (com) => (
        <div className='Contenedor-Comentario row bg-light text-dark'>
            <div className='Contenedor2'>
                <div className='Usuario-Info col align-start pad-10 gap-5'>
                    <img className='Usuario-IMG' src={com.user.photo} alt='userImg' />
                    <h4 className='align-center w-normal'>{com.user.name}</h4>
                </div>
                <div className='ydivider-dark transparent-50'></div>
                <p className='Comentario'>{com.comment}</p>
            </div>
            <div className='align-end gap-5'>
                {role === "admin" ? <UpdateComment id={com._id} data={editedComment} /> : null}
                {role === "admin" ? <DeleteComment data={com._id} /> : null}
            </div>
        </div>
    )

    return (
        <>
            {commentField?.map(commentCard)}
        </>
    )
}
