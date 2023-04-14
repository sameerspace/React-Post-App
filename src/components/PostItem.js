import { Card, CardContent, CardHeader, Typography, Container, Stack, Button, ButtonGroup } from "@mui/material";
import CommentSection from "./CommentSection";
import { useNavigate } from "react-router-dom";


const PostItem = (props) => {

    const navigate = useNavigate()

    

    return (
        <Container sx={{ padding:2,  }}>
            <Card sx={{ height: 200, bgcolor:'grey'}}>
                <Stack direction={"row"} justifyContent={"space-between"} >
                    <CardHeader title={props.post.title} />
                    {/* dont render if post.userId doesnt match currentUserId */}
                    <ButtonGroup variant="text">
                        <Button onClick={()=> navigate('/edit-post', {state:{props}} )} >Edit</Button>
                        <Button>Delete</Button>
                    </ButtonGroup>
                </Stack>
                <CardContent>
                    <Typography sx={{fontSize:'14px',color: 'black'}}>{props.post.body}</Typography>
                </CardContent>
            </Card>
            <CommentSection props={props.post.id} ></CommentSection>

        </Container>
    );

}


export default PostItem;