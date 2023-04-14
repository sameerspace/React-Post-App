import { List } from "@mui/material";
import PostItem from "./PostItem";
import { useEffect, useState } from "react";




const MyPostList = () => {
    
    const [posts,setPosts] = useState([])

    const fetchAndSetMyPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        // setPosts(data.filter((post)=> post.creatorId === '1'))
        setPosts(data)
    }

    useEffect(()=>fetchAndSetMyPosts,[])
    
    return ( 
        <List>
               {posts.map((post,index)=>(
                    <PostItem key={index} post={post} ></PostItem>
                ))}
        </List>
    );
}
 
export default MyPostList;