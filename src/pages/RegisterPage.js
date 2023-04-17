import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container,Typography, Stack, TextField, Button } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";

const RegisterPage = () => {
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const auth = useAuth()

    const register = () => {
        auth.register(username,email,password)
    }

    return ( 
        <Container sx={{height:'100vh'}}>
                <Stack sx={{height:'100%'}} direction="column" spacing={2} alignItems={"center"} justifyContent={"center"} >
                    <Typography variant="h1"  >Register</Typography>
                    <TextField id="outlined-basic" label="Username" variant="outlined" onChange={(e)=>setUsername(e.target.value)} /><br/>
                    <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e)=>setEmail(e.target.value)} /><br/>
                    <TextField id="outlined-password-input" label="Password" variant="outlined" onChange={(e)=>setPassword(e.target.value)} /><br/>
                    <Stack direction={'row'} spacing={2} alignItems={'center'} >
                        <NavLink to="/login">Already Have an Account ?</NavLink>
                        <Button  variant="contained" onClick={register} >Register</Button>
                    </Stack>
                </Stack>
        </Container>
    );
}
 
export default RegisterPage;