import { createContext, useContext, useEffect, useState } from "react";


const PostContext = createContext()

export const usePosts = () => useContext(PostContext)

const PostProvider = ({children}) => {

    const [posts,setPosts] = useState([])

    useEffect(()=>{
        localStorage.setItem('posts',posts)
    },[posts])

    useEffect(()=>{
        let json = localStorage.getItem('posts')
        if(json) setPosts(JSON.parse(json))
    },[])

    const addPost = post => {        
        setPosts([...posts,post])
    }

    const deletePost = postId => {
        setPosts(posts.filter((post) => post.id !== postId))
    }

    const updatePost = updatedPost => {
        setPosts(posts.map((post) => (post.id === updatedPost.id ? updatedPost: post)))
    }

    const getPostById = postId => {
        return posts.filter((post) => post.id === postId)
    }

    return (
        <PostContext.Provider value={{posts,addPost,deletePost,updatePost,getPostById}} >
            {children}
        </PostContext.Provider>
    )

}

export default PostProvider;