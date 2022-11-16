import { Card, Col, Container, Row } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import Card1 from '../components/Card1';

function Bouquet() {
  return (
    <div>
    <Container>
      <Row>
        <Col className='mt-5 aline-center'>
          <Spinner animation="border" variant="secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <p>페이지 준비중입니다</p>
        </Col>
      </Row>
      <Row>
        <Col>
        <Card1/>
        </Col>
      </Row>

    </Container>
  
    
    </div>
    
  );
}

export default Bouquet;