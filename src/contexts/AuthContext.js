import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext()

export const useAuth = () =>  useContext(AuthContext)



const AuthProvider = ({children}) => {
    
    const [currentUser,setCurrentUser] = useState({id:null,username:null,password:null,email:null})
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const navigate = useNavigate()



    const register = (username,email,password) => {
        let user = {
            id: '1',
            username: username,
            password: password,
            email: email,
        }        
        localStorage.setItem('user',JSON.stringify(user))
        localStorage.setItem('isLogged',JSON.stringify(true))
        setCurrentUser(user)
        setIsLoggedIn(true)
        console.log(localStorage)
        navigate('/posts')
    }

    const login = (username,password) => {
        let user = JSON.parse(localStorage.getItem('user'))
        if(user){
            if(user.username === username && user.password === password){
                localStorage.setItem('isLogged',JSON.stringify(true))
                setIsLoggedIn(true)
                navigate('/posts')
            }else{
                console.log('Credentials Do Not MAtch')
            }
        }else{
            console.log('User does not exist')
        }

    }

    const logout = ()=>{
        setIsLoggedIn(false)
        navigate('/login')
    }

    const value = {
        currentUser,
        isLoggedIn,
        register,
        login,
        logout,
    }

    return (  
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    );
}
 
export default AuthProvider;
