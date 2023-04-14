import { createContext, useContext, useEffect, useState } from "react";
import { usePosts } from "./PostContext";


const CommentContext = createContext()

export const useComments = () => useContext(CommentContext)

const CommentProvider = ({children}) => {

    const [comments,setComments] = useState([])


    const fetchAndSetComments =  async (postId) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        const data = await response.json()
        localStorage.setItem('comments',JSON.stringify(data))
        setComments(data)
    }

    useEffect(()=>{
        localStorage.setItem('comments',comments)
    },[comments])

    useEffect(()=>{
        let json = localStorage.getItem('comments')
        if(json){
            setComments(JSON.parse(json))
        }
    },[])

    const addComment = (comment) => {        
        setComments([...comments,comment])
        //update localStorage                                                           
    }

    const deleteComment = (commentId) => {
        setComments(comments.filter((comment)=> comment.id !== commentId))
    }

    const updatecomment = (updatedcomment) => {
        setComments(comments.map((comment)=> ([comment.id === updatedcomment.id ? updatedcomment: comment])))
    }

    const getCommentsOfPost = (postId) => {
        return comments.filter((comment)=> comment.postId === postId)                   
    }

    return (
        <CommentContext.Provider value={{comments,addComment,deleteComment,updatecomment,fetchAndSetComments,getCommentsOfPost}} >
            {children}
        </CommentContext.Provider>
    )

}

export default CommentProvider;