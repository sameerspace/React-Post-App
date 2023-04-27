import { Typography,Button,Stack } from "@mui/material";
import { useComments } from "../contexts/CommentContext";
import { useAuth } from "../contexts/AuthContext";

const Comment = ({props}) => {
    return (
        <Stack borderBottom={2} width='85%'> 
            <Typography key={props.id} variant="h6">{props.name}</Typography>
            <Typography variant="body1" >{props.body}</Typography>
        </Stack>
    );
}

export default Comment;