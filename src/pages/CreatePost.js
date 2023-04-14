import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/AppBar";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

const CreatePostPage = () => {
    
    const navigate = useNavigate()

    const [title,setTitle] = useState()
    const [body,setBody] = useState()

    
    const createPost = ()=>{
        //POST to API
        let user = {
            'userId': 1, // GET USER ID,
            'id': uuid(),
            'title': title,
            'body': body,
        }

        //post user
        navigate('/posts')
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