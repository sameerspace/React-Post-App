import { List } from "@mui/material";
import PostItem from "./PostItem";
import { usePosts } from "../contexts/PostContext";
import { useState } from "react";




const MyPostList = () => {
    
    const { getMyPosts } = usePosts()
    

    return ( 
        <List>
               {getMyPosts().map((post,index)=>(
                    <PostItem key={index} post={post} ></PostItem>
                ))}
        </List>
    );
}
 
export default MyPostList;