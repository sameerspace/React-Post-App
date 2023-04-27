import { Accordion, AccordionDetails, AccordionSummary, Typography,Stack, Button  } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useComments } from '../contexts/CommentContext';
import Comment from './Comment';
import  CommentInput  from './CommentInput'
import { useState } from 'react';
import EditCommentInput from './EditCommentInput';

const MyCommentSection = ({props}) => {

    const [isEditing,setIsEditing] = useState(false)
    const [editComment,setEditComment] = useState({})
    const { comments,deleteComment } = useComments()    


    return (  
        <Accordion>
        <AccordionSummary 
          expandIcon={<ExpandMore />}
          aria-controls="comments-panel-content"
          id="comments-panel-header"
        >
        <Typography >Comments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {comments.map((comment, index) => (
            <Stack key={index}  direction='row' justifyContent='space-between' padding={2}>
                <Comment key={comment.id} props={comment} />
                <Button variant="contained" color="error" onClick={()=>deleteComment(comment.id)}>Delete</Button>
                <Button variant="contained" color="info" onClick={()=>{
                    setEditComment(comment)
                    setIsEditing(true)
                }}>Edit</Button>
            </Stack>
          ))}
        </AccordionDetails>
        {isEditing ?
            <EditCommentInput props={{editComment,setIsEditing}} />
            :<CommentInput props={props}/>
        }
      </Accordion>
    );
}
 
export default MyCommentSection; 