import {List} from '@mui/material';
import PostItem from './PostItem';
import { usePosts } from '../contexts/PostContext';

const PostList = () => {
    const {posts } = usePosts()

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