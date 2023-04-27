import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Comment from './Comment';



const CommentSection = ({props}) => {


  const { getUser } = useAuth()
  const [comments,setComments] = useState([])
  const currentUser = getUser()

  const fetchCommentsByPostId = async (id) => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    const data = await resp.json()
    setComments(data) 
  }

  useEffect(()=>{
    fetchCommentsByPostId(props)
  },[])
 
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
            <Comment key={comment.id} props={comment} />
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CommentSection;
