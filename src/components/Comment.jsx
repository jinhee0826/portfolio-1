import { ListGroup } from "react-bootstrap";

const Comment = (props) => {
    const {comment} = props;
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