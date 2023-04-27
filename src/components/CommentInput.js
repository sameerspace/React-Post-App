import { Stack,TextField,Button} from "@mui/material";
import { useComments } from "../contexts/CommentContext";
import { useRef } from "react";
import { useAuth } from "../contexts/AuthContext";


const CommentInput = ({props}) => {
    const { addComment } = useComments()
    const { getUser, generateId } = useAuth()
    const commentRef = useRef()


    const createAndPostComment = body => {
        commentRef.current.value = ""
        const user = getUser()
        let comment = {
            postId: props,
            id: generateId(),
            email: user.email,
            body: body,
            name: user.username,
        }
        addComment(comment)
    }

    return (  
        <Stack direction={'row'}>
            <TextField 
                fullWidth
                inputRef={commentRef}
            >
            </TextField>
            <Button
                onClick={()=>{createAndPostComment(commentRef.current.value)}}
                variant='contained'
            >
            Add</Button>
      </Stack>
    );
}
 
export default CommentInput;