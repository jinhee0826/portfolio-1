import { useContext } from "react";
import { useState } from "react";
import { Button, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DataContext from "../context/DataContext";
const CommentInput = () => {
  const {id} = useParams();
  const [textInput, setTextInput]= useState("");
  const {action, state} = useContext(DataContext);

  const addComment = () => {
    const comment =  {
      commentId : state.commentCount, 
      productId : id, 
      name : (state.user ? state.user.name : "" ), 
      name : (state.user ? state.user.name : "익명" ), 
      text : textInput 
    }

    action.setAllComments(state.allComments.concat(comment))
    action.setAllComments(state.allComments.concat(comment) )
    console.log(state.allComments)
    state.commentCount++;
    action.setCommentCount(state.commentCount+1);
  }

  return (
    <div>
      <Container>
        <Row>
          <Col xs={10} >
            <FloatingLabel 
              controlId="floatingTextarea"
              label="Comments"
              className="mb-3"
            >
              <Form.Control as="textarea" placeholder="Leave a comment here"
                onChange={(e)=>{setTextInput(e.target.value)}}
              />
            </FloatingLabel>
          </Col>
          <Col xs={2} className="d-grid gap-2">
            <Button variant="light" onClick={addComment}>입력</Button>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
};
export default CommentInput;