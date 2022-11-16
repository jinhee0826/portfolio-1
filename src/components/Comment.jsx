import { ListGroup } from "react-bootstrap";

const Comment = (props) => {
    const {comment} = props;
    // CommentInput에서 가져옴 
    
    return (  
        <ListGroup.Item>
            <div>
                <h5>{comment.name}</h5>
                <p>{comment.text}</p>
            </div>

        </ListGroup.Item>
    );
}

export default Comment;