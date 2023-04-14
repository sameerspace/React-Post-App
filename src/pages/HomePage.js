import { useEffect } from 'react';
import ResponsiveAppBar from '../components/AppBar'
import PostList from '../components/PostList';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const auth = useAuth()
    const navigate = useNavigate()

    
    useEffect(()=>{

        if(!auth.isLoggedIn){
            navigate('/login')
        }
    
    },[])
    

    return ( 
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <PostList></PostList>
        </>
     );
}
 
export default HomePage;