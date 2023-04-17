import { createContext, useContext, useEffect, useState } from "react";


const PostContext = createContext()

export const usePosts = () => useContext(PostContext)

const PostProvider = ({children}) => {

    const [posts,setPosts] = useState([])

    const fetchAndSetPosts =  async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        localStorage.setItem('posts',JSON.stringify(data))
        setPosts(data)
    }

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
        setPosts(posts.map((post) => ([post.id === updatedPost.id ? updatedPost: post])))
    }

    const getMyPosts = () => {
        const user = JSON.parse(localStorage.getItem('user'))
        return posts.filter((post) => post.userId === user.id)
    }

    const getPostById = postId => {
        return posts.filter((post) => post.id === postId)
    }

    return (
        <PostContext.Provider value={{posts,addPost,deletePost,updatePost,fetchAndSetPosts,getMyPosts,getPostById}} >
            {children}
        </PostContext.Provider>
    )

}

export default PostProvider;