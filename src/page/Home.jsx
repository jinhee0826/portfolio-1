import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { Col, Container, Row } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";



const Home = () => {

  const [show, setShow] = useState(true);

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };

    const wedding = ([
      {img : "1.jpg"},
      {img : "2.jpg"},
      {img : "3.jpg"},
      {img : "4.jpg"},
      {img : "5.jpg"},
      {img : "6.jpg"} 
    ]);

    return (  
        <Container className="warp">
          <Row>
            <Col className= " my-3">
              <Alert show={show} variant="light">
              <Alert.Heading>당신의 행복을 축하드립니다</Alert.Heading>
                <p>
                  함께하는 모든 순간이 행복으로 가득할 수 있도록 도와드리겠습니다
                </p>
                <hr />
                <div className="d-flex justify-content-end">
              <Button
                onClick={() => setShow(false)} 
                variant="outline-secondary" >
                확인
              </Button>
            </div>
          </Alert>
              <Slider {...settings} >
              { wedding.map((img,index)=>(
                  <div key={index}>
                    <img 
                    style={{
                      
                      width : "100%" , 
                      height : "100%",

                    }}
                    src={require(`../img/${img.img}`)} alt="" />
                  </div>
                )) }
        </Slider>
            </Col>
          </Row>

      </Container>
    );
}

export default Home;