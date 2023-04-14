import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import RegisterPage from './pages/RegisterPage';
import MyPostsPage from './pages/MyPostsPage';
import CreatePostPage from './pages/CreatePost';
import EditPostPage from './pages/EditPostPage';


function App() {
  return (
    <Routes>
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