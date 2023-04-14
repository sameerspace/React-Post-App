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
import { useComments } from './contexts/CommentContext';


function App() {

  const { posts, fetchAndSetPosts } = usePosts()
  const { fetchAndSetComments } = useComments()

  useEffect(()=>fetchAndSetPosts,[])
  for(let i=0;i<posts.length;i++){
    fetchAndSetComments(posts[i].id)
  }

  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/posts' element={<HomePage/>}/>
      <Route path='/login' element={<SignInPage/>} />
      <Route path='/register' element={<RegisterPage/>} />
      <Route path='/my-posts' element={<MyPostsPage/>} />
      <Route path='/create-post' element={<CreatePostPage/>} />
      <Route path='/edit-post' element={<EditPostPage/>} />
    </Routes>
  );
}

export default App;
