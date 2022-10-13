import {useEditCommentMutation} from '../../features/commentAPI'
import '../../styles/Comment.css'

export default function EditComent(props){
    const [editComment] = useEditCommentMutation()

    const id = props.id
    const data = props.data

    const handleEdit = () => {
        editComment({id, data})
    }

    return(
        <div>
            <button className='updateComment' type="submit" onClick={handleEdit}>Editar</button>
        </div>
    )
}