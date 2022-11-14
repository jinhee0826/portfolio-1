import { useEffect } from "react";
import { useContext, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import CommentInput from "../components/CommentInput";
import ProductDisplay from "../components/ProductDisplay";
import DataContext from "../context/DataContext";

const ProductDetaile = () => {
    const data = useContext(DataContext);
    const {id} = useParams();
    const [comments, setComments] = useState(                    
        data.state.allComments
        .filter((comment)=>(comment.productId == id)));


    useEffect(()=>{
        setComments(data.state.allComments.filter((comment)=>(comment.productId==id)))
    },[data.state.allComments]);

    const getProduct = () => { return data.state.productList.find((product)=>(product.productId == id)) }

    return (  
        <div>
            <ProductDisplay product={ getProduct() }/>
            <br></br>
            <hr />
            <CommentInput id={id}/>
            <ListGroup  style={{
                textAlign : "left",
                }}>
                {comments.map((comment)=>( <Comment key={comment.commentId} comment={comment} />))}
            </ListGroup>

        </div>
        );
}
export default ProductDetaile;