import { useDeleteCommentMutation } from '../../features/commentAPI'
import '../../styles/Comment.css'
import styles from '../Styles'

export default function DeleteComment(props) {
    const [deleteComment] = useDeleteCommentMutation()

    const id = props.data

    const handleDelete = () => {
        deleteComment(id)
    }

    return (
        <>
            <button className={styles.deleteCommentButton} type="button" onClick={handleDelete}>Eliminar</button>
        </>
    )
}