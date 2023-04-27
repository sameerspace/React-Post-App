import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import RegisterPage from './pages/RegisterPage';
import MyPostsPage from './pages/MyPostsPage';
import CreatePostPage from './pages/CreatePost';
import EditPostPage from './pages/EditPostPage';
import { usePosts } from './contexts/PostContext';
import { useEffect } from 'react';
import { useAuth } from './contexts/AuthContext';



const App = () => {
  const { fetchAndSetPosts } = usePosts()
  const { userIsLoggedIn } = useAuth()
  const user = userIsLoggedIn()

  useEffect(() => fetchAndSetPosts)
  
  return (
    <Routes>
      <Route path='/' element={ user ?  <HomePage/> : <SignInPage/>}/>
      <Route path='/posts' element={<HomePage/>}/>
      <Route path='/login' element={<SignInPage/>} />
      <Route path='/register' element={<RegisterPage/>} />
      <Route path='/my-posts' element={user ? <MyPostsPage/> : <SignInPage/>} />
      <Route path='/create-post' element={ user ? <CreatePostPage/> : <SignInPage/> } />
      <Route path='/edit-post' element={ user ? <EditPostPage/> : <SignInPage/>} />
    </Routes>
  );
}

export default App;
