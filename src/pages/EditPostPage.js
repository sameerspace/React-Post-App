import ResponsiveAppBar from "../components/AppBar";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { usePosts } from "../contexts/PostContext";

const EditPostPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const post = location.state.props.post || {} 
    const { updatePost } = usePosts()
    const [title, setTitle] = useState(post.title)
    const [body, setBody] = useState(post.body)

    const editPost = () => {
        post.title = title
        post.body = body
        updatePost(post)
        navigate('/posts')
    }
    
    return (  
       <>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Typography sx={{mt:5, ml:8}} variant="h2" >Edit Post</Typography>
        <Container>
                <Stack sx={{height: '80vh'}} justifyContent={"center"} spacing={4} >
                    <Typography>Title</Typography>
                    <TextField 
                        label="Title"
                        onChange={(e)=> setTitle(e.target.value)}
                        value={title}
                    />
                    <Typography>Content</Typography>
                    <TextField
                        rows={5}
                        id="outlined-textarea"
                        label="Content"
                        value={body}
                        multiline
                        onChange={(e)=> setBody(e.target.value)}
                    />
                    <Button sx={{maxWidth:250}} variant="contained" onClick={editPost} >Create Post</Button>
                </Stack>
            </Container>
       </>
    );
}
 
export default EditPostPage;