import { Col, Container, Row } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

function Bouquet() {
  return (
    <Container>
      <Row>
        <Col className='mt-5 aline-center'>
          <Spinner animation="border" variant="secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <p>페이지 준비중입니다</p>
        </Col>
      </Row>
    </Container>
    
  );
}

export default Bouquet;