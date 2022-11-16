import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DataContext from '../context/DataContext';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';

function Card1(props) {
    const {product} = props;
    const data = useContext(DataContext);
    const navigate = useNavigate()
    
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
    
  return (
    <Container>
        <Row>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Slider {...settings}>
                        <Card.Img 
                        //내용 확인을위해 datacontext값 사용
                        variant="top" src={require(`../img/${data.state.productList[0].productPicture[0]}`)} />
                        <Card.Img 
                        //내용 확인을위해 datacontext값 사용
                        variant="top" src={require(`../img/${data.state.productList[0].productPicture[1]}`)} />
                    </ Slider>
                <Card.Body onClick={()=>{navigate("/product/"+data.state.productList[0].productId)}}>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>

  );
}

export default Card1;