import { Container,Typography, TextField, Button, Stack } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const SignInPage = () => {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const auth = useAuth()

    const loginUser = ()=>{
        auth.login(username,password)
    }

    return (  
        <>
            <Container sx={{height:'100vh'}}>
                <Stack sx={{height:'100%'}} direction="column" spacing={2} alignItems={"center"} justifyContent={"center"} >
                    <Typography variant="h1"  >Login</Typography>
                    <TextField id="outlined-basic" label="Username" variant="outlined" onChange={(e)=>setUsername(e.target.value)} /><br/>
                    <TextField id="outlined-password-input" label="Password" variant="outlined" onChange={(e)=>setPassword(e.target.value)} /><br/>
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                        <NavLink to="/register">Create an Account ?</NavLink>
                        <Button  variant="contained" onClick={loginUser} >Login</Button>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}
 
export default SignInPage;

