import {List} from '@mui/material';
import PostItem from './PostItem';
import { useEffect, useState } from 'react';

const PostList = () => {

    const [posts,setPosts] = useState([])

    const fetchAllPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        setPosts(data)     
    }

    useEffect(()=>{
        fetchAllPosts()
    },[])

    if(posts.length <= 0) return <h1>No posts to show.</h1>
    
    return (
        <List>
            {posts.map((post,index)=>(
                    <PostItem key={index} post={post} ></PostItem>
                ))}
        </List>
    );
}


export default PostList;