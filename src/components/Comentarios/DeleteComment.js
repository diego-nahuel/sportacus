import {useDeleteCommentMutation} from '../../features/commentAPI'
import '../../styles/Comment.css'

export default function DeleteComment(props){
    const [deleteComment] = useDeleteCommentMutation()

    const id = props.data

    const handleDelete = () =>{
        deleteComment(id)
    }

    return(
        <div>
            <button className='deleteComment' type="button" onClick={handleDelete}>Eliminar</button>
        </div>
    )
}