import { useContext } from "react";
import { Outlet } from "react-router";
import ProductCard from "../components/ProductCard";
import DataContext from "../context/DataContext";


const ProductDress = () => {
  const { state } = useContext(DataContext);
  return (
    <div className="dress">
      {state.productList.map((product) => (
        <div  className="dress" >
          <ProductCard key={product.productId} product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductDress;