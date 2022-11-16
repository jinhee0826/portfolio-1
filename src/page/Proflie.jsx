import { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import DataContext from "../context/DataContext";
import ProfileUpdateModal from "../components/ProfileUpdateModal";

const Proflie = () => {
    const {state} = useContext(DataContext);
    

    return (
      <div>
        <Container className="mt-3">
          <Row>
            <Col>
              { state.user.profile ? 
                <div style={{
                  width: "200px", 
                  height: "200px", 
                  backgroundImage : `url(${state.user.profile})` ,
                  backgroundSize :"cover" }}>
                </div> : 
                <div style={{
                  width: "200px", height: "200px", backgroundColor: "lightgray"}}>
                </div> 
              }
              <ProfileUpdateModal />
            </Col>
            <Col>
            <div>
              <h4>{state.user.name}님의 프로필</h4>
              <hr />
              <h4>{state.user.name}의 찜♥목록</h4>
              <ul className="likelist">
                <br />
                  <p>{state.user.likelist.map((like)=>(<li>{like.productName}</li>))}</p>
              </ul>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Proflie;