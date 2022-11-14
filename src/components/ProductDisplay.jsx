import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useContext } from 'react';
import DataContext from '../context/DataContext'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as activeHeart} from '@fortawesome/free-solid-svg-icons'
import {faHeart as disactiveHeart} from '@fortawesome/free-regular-svg-icons'

const ProductDisplay = (props) => {
  const {product} = props;
  const [index, setIndex] = useState(0)
  const data = useContext(DataContext);
  const [likeCheck, setLikCheck] = useState(false)

    useEffect(()=>{ 
    if(!data.state.user) {setLikCheck(false)}}, [data.state.user])

  const toggleLike = () => {
    if (!data.state.user) {
      return ;
    }
    const likes = data.state.user.likelist;
    if( likes.find((like)=>(like.productId == product.productId)) ) {
      const newLikeList = likes.filter((like)=>(like.productId != product.productId));
      data.action.setUser({
        ...data.state.user,
        likelist : newLikeList
      })
      setLikCheck(false);
    } else {
      const like = {productId : product.productId, productName : product.productName};
      const newLikeList = likes.concat(like);
      data.action.setUser({
        ...data.state.user,
        likelist : newLikeList
      })
      setLikCheck(true);
    }
  };
  

  return (
    <Container >
      <Row>
        <Col>
          <div>
            <img src={require(`../img/${product.productPicture[index]}`)} alt="" height={"400px"}/>
          </div>
        </Col>
        <Col>
          <div>
            <h1>{product.productName}</h1>
            <p>{product.productDetail}</p>
            <p>{product.productPrice}</p>
            <p>
              only white
              <input type="number" 
                style={{
                  width: "50px",
                  marginLeft: "10px",
                  
                }}/>
            </p>
            <div className="d-grid gap-2">
              <Button variant="danger" size="lg">
                구매
              </Button>
              <Button variant="light" size="lg">
                장바구니
              </Button>
              <Button variant="light" size="lg" onClick={ toggleLike }>
                찜
                <FontAwesomeIcon icon={ likeCheck ? activeHeart : disactiveHeart} />
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default ProductDisplay;