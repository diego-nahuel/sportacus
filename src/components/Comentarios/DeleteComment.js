import { useDeleteCommentMutation } from '../../features/commentAPI'
import '../../styles/Comment.css'

export default function DeleteComment(props) {
    const [deleteComment] = useDeleteCommentMutation()

    const id = props.data

    const handleDelete = () => {
        deleteComment(id)
    }

    return (
        <>
            <button className='br3-br br-lightblue transition form-padding bg-dark text-light' type="button" onClick={handleDelete}>Eliminar</button>
        </>
    )
}