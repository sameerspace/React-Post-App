import { Accordion, AccordionDetails, AccordionSummary, Button, Typography,  } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useEffect, useState } from 'react';




const CommentSection = (props) => {


  const [comments,setComments] = useState([])

  const fetchComments = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    const data = await response.json()
    console.log(data)
    setComments(data)
  }

  useEffect(()=>{
    fetchComments(props.props)
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
            <Typography key={index}>{comment.name} 
            <Button>Delete</Button>
            </Typography>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CommentSection;
