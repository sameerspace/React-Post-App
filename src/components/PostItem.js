import { Card, CardContent, CardHeader, Typography, Container, Stack, Button, ButtonGroup } from "@mui/material"
import CommentSection from './CommentSection'
import { useNavigate } from 'react-router-dom'
import { usePosts } from '../contexts/PostContext'
import MyCommentSection from "./MyCommentSection"
import { useAuth } from "../contexts/AuthContext"

const PostItem = (props) => {
    const navigate = useNavigate()
    const { deletePost } = usePosts()
    const { userIsLoggedIn, getUser } = useAuth()
    let user = {}
    if(userIsLoggedIn()) user = getUser()
    console.log('Current Condition',props.post.userId != user.id)

    return (
        <Container sx={{ padding:2,  }}>
            <Card sx={{ height: 200, bgcolor:'grey'}}>
                <Stack direction="row" justifyContent="space-between">
                    <CardHeader title={props.post.title} />
                    { user.id === props.post.userId &&
                    <ButtonGroup variant="text">
                        <Button onClick={()=> navigate('/edit-post', {state:{props}} )} >Edit</Button>
                        <Button onClick={()=> deletePost(props.post.id)}>Delete</Button>
                    </ButtonGroup> }
                </Stack>
                <CardContent>
                    <Typography sx={{fontSize:'14px',color: 'black'}}>{props.post.body}</Typography>
                </CardContent>
            </Card>
            {
            
                props.post.userId != user.id ? 
                    <CommentSection props={props.post.id} ></CommentSection>
                : <MyCommentSection props={props.post} ></MyCommentSection>
            }
        </Container>
    );
}


export default PostItem;