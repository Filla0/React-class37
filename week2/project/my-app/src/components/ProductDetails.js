import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../useFetchData";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const URL = `https://fakestoreapi.com/products/${id}`;
  const { loading, error } = useFetchData(URL, setProduct);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <div className="product-detail">
      <h1>{product.title}</h1>
      <div className="detail-container">
        <p>{product.description}</p>
        <img src={product.image} alt={product.title} />
      </div>
      <p>PRICE: {product.price}</p>
    </div>
  );
};
export default ProductDetails;
