import { Card, CardContent, CardHeader, Typography, Container, Stack, Button, ButtonGroup } from "@mui/material"
import CommentSection from './CommentSection'
import { useNavigate } from 'react-router-dom'
import { usePosts } from '../contexts/PostContext'

const PostItem = (props) => {
    const navigate = useNavigate()
    const { deletePost } = usePosts()
    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <Container sx={{ padding:2,  }}>
            <Card sx={{ height: 200, bgcolor:'grey'}}>
                <Stack direction={"row"} justifyContent={"space-between"} >
                    <CardHeader title={props.post.title} />
                    { user.id === props.post.userId &&
                    <ButtonGroup variant="text">
                        <Button onClick={()=> navigate('/edit-post', {state:{props}} )} >Edit</Button>
                        <Button onClick={()=>deletePost(props.post.id)}  >Delete</Button>
                    </ButtonGroup> }
                </Stack>
                <CardContent>
                    <Typography sx={{fontSize:'14px',color: 'black'}}>{props.post.body}</Typography>
                </CardContent>
            </Card>
            <CommentSection props={props.post.id} ></CommentSection>
        </Container>
    );

}


export default PostItem;