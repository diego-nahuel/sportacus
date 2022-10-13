import { useEditCommentMutation } from '../../features/commentAPI'
import '../../styles/Comment.css'
import styles from '../Styles'

export default function EditComent(props) {
    const [editComment] = useEditCommentMutation()

    const id = props.id
    const data = props.data

    const handleEdit = () => {
        editComment({ id, data })
    }

    return (
        <>
            <button className={styles.editCommentButton} type="submit" onClick={handleEdit}>Editar</button>
        </>
    )
}