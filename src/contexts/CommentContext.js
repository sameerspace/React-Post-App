import { createContext,useContext,useState } from "react";

const CommentContext = createContext()

export const useComments = ()=> useContext(CommentContext)

const CommentProvider = ({children}) => {
    const [comments,setComments] = useState([])
    
    const fetchAndSetCommentsByPostId = async (id) => {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        const data = await resp.json()
        setComments(data)
    }

    const addComment = comment => {
        setComments([...comments,comment])
    }

    const updateComment = newComment => {
        setComments(comments.map((comment)=> ([comment.id === newComment.id ? newComment: comment])))
    }

    const deleteComment = commentId => {
        setComments(comments.filter((comment)=> comment.id !== commentId))
    }

    const getComments = () => comments

    return (
        <CommentContext.Provider value={{comments,fetchAndSetCommentsByPostId,getComments,updateComment,addComment,deleteComment}} >
            {children}
        </CommentContext.Provider>  
    )
}

export default CommentProvider;