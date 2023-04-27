import { Stack,TextField,Button} from "@mui/material";
import { useComments } from "../contexts/CommentContext";
import { useRef, useState } from "react"

const EditCommentInput = ({props:{editComment,setIsEditing}}) => {

    const commentRef = useRef()
    const [body,setBody] = useState(editComment.body)
    const { comments,updateComment } = useComments()

    const editCommentList = (editedBody) => {
        if(editedBody == ''){
            alert('Comment cant be empty')
            return
        }

        let newComment = editComment
        newComment.body = editedBody
        updateComment(newComment)
        setIsEditing(false)
    }

    return (  
        <Stack direction={'row'}>
            <TextField 
                fullWidth
                inputRef={commentRef}
                value={body}
                onChange={(e)=>setBody(e.target.value)}
            >
            </TextField>
            <Button
                onClick={()=>{editCommentList(commentRef.current.value)}}
                variant='contained'
            >
            Edit</Button>
      </Stack>
    );
}
 
export default EditCommentInput;