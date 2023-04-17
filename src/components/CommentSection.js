import { Accordion, AccordionDetails, AccordionSummary, Button, Stack, TextField, Typography,  } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useComments } from '../contexts/CommentContext';



const CommentSection = (id) => {

  const {comments, addComment,fetchAndSetCommentsByPostId, deleteComment } = useComments()

  const [nameVal,setNameVal] = useState()

  let user = JSON.parse(localStorage.getItem('user'))


  const initComments = async () => {
    await fetchAndSetCommentsByPostId(id.props)
  }


  const createComment = (name) => {
    

    let comment = {
      postId: id,
      id : 25,
      name: name,
      email: user.email,
      body: "Sample Body",
    }

    addComment(comment)
  }

  useEffect(()=>{
    initComments()
  })

  return (
    <div>
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
            <Typography key={index}>{comment.name} 
            { user.email === comment.email ? <Button onClick={()=> deleteComment(comment.id)} >Delete</Button> : null }
            </Typography>
          ))}
        </AccordionDetails>
        <Stack direction={'row'}>
          <TextField 
          fullWidth
          onChange={(e)=>setNameVal(e.target.value)}
          >
          </TextField>
          <Button
            onClick={()=>createComment(nameVal)}
            variant='contained'
          >Add</Button>
        </Stack>
      </Accordion>
    </div>
  );
};

export default CommentSection;
