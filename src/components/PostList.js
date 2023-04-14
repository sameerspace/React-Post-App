import {List} from '@mui/material';
import { useEffect, useState } from 'react';
import PostItem from './PostItem';


const PostList = () => {

    const [posts,setPosts] = useState([])

    const fetchAndSetPosts =  async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        setPosts(data)
    }

    useEffect(()=>fetchAndSetPosts,[])


    return (
        <List>
            {posts.map((post,index)=>(
                    <PostItem key={index} post={post} ></PostItem>
                ))}
        </List>
    );





}


export default PostList;