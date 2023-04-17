import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/AppBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../contexts/PostContext";

const CreatePostPage = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState()
    const [body, setBody] = useState()
    const { addPost } = usePosts()
    
    const generateId = () => Math.ceil(Math.random() * 1000)

    const createPost = ()=>{
        
        const user = JSON.parse(localStorage.getItem('user'))

        let post = {
            'id': generateId(),
            'userId': user.id,
            'title': title, 
            'body': body,
        }

        console.log(post)
        addPost(post)
        navigate('/my-posts')
    }
    
    return (  
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Container>
                <Stack sx={{height: '80vh'}} justifyContent={"center"} spacing={4} >
                    <Typography>Title</Typography>
                    <TextField 
                        id="outlined-basic"
                        label="Title"
                        variant="outlined" 
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                    <Typography>Content</Typography>
                    <TextField
                        rows={5}
                        id="outlined-textarea"
                        label="Content"
                        placeholder="Enter your description"
                        multiline
                        onChange={(e)=>setBody(e.target.value)}
                    />
                    <Button sx={{maxWidth:250}} variant="contained" onClick={createPost} >Create Post</Button>
                </Stack>
            </Container>
        </>        
    );
}
 
export default CreatePostPage;