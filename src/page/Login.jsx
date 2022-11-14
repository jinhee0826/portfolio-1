import { useContext } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import DataContext from "../context/DataContext";

const Login = () => {
  const [name, setName] = useState("");
  const {action} = useContext(DataContext);
  const navigate = useNavigate();

  const loginUser = () => {
    action.setUser({name : name, proflie : null, likelist: []});
    navigate('/');
  }

    return (  
        <Form className="m-5" onSubmit={loginUser}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ID</Form.Label>
        <Form.Control type="text" placeholder="아이디를 입력해주세요"
        onChange={(e)=>{setName(e.target.value)}}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="비밀번호를 입력해주세요" />
      </Form.Group>
      <Button variant="outline-secondary" type="submit">
        확인
      </Button>
    </Form>
    );
}

export default Login;