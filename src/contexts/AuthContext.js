import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext()

export const useAuth = () =>  useContext(AuthContext)



const AuthProvider = ({children}) => {    
    const navigate = useNavigate()
    const generateId = () => Math.ceil(Math.random() * 100000)

    const register = (username, email, password) => {
        let user = {
            id: generateId(),
            username: username,
            password: password,
            email: email,
        }        
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('isLogged', JSON.stringify(true))
        navigate('/posts')
    }

    const login = (username, password) => {
        let user = JSON.parse(localStorage.getItem('user'))
        if(user){
            if(user.username === username && user.password === password){
                localStorage.setItem('isLogged',JSON.stringify(true))
                navigate('/posts')
            }else{
                console.log('Credentials Do Not MAtch')
            }
        }else{
            console.log('User does not exist')
        }

    }

    const getUser = () => {
        let user = localStorage.getItem('user')
        if(user){
            return JSON.parse(user)
        }
        return {}
    }

    const logout = ()=>{
        localStorage.setItem('isLogged',JSON.stringify(false))
        navigate('/login')
    }

    const userIsLoggedIn = () => JSON.parse(localStorage.getItem('isLogged'))

    return (  
        <AuthContext.Provider value={{getUser,userIsLoggedIn,register,login,logout,generateId}}>
            {children}
        </AuthContext.Provider>
    );
}
 
export default AuthProvider;
