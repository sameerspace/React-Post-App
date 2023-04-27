import { List } from "@mui/material";
import PostItem from "./PostItem";
import { usePosts } from "../contexts/PostContext";

const MyPostList = () => {    
    const { posts } = usePosts()

    return ( 
        <List>
            {posts.map((post,index)=>(
                <PostItem key={index} post={post} ></PostItem>
            ))}
        </List>
    );
}
 
export default MyPostList;