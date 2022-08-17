import { useState } from "react";
import { useParams } from "react-router-dom";
import FetchData from "../Fetch-data";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const URL = `https://fakestoreapi.com/products/${id}`;
  const { loading, error } = FetchData(URL, setProduct);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <div className="detail">
      <h1>{product.title}</h1>
      <div className="detail-1">
        <p>{product.description}</p>
        <img src={product.image} alt={product.title} />
      </div>
      <p>PRICE: {product.price}</p>
    </div>
  );
};
export default ProductDetails;
//   const [product, setProduct] = useState({});
//   const { id } = useParams();
//   const URL_item = `https://fakestoreapi.com/products/${id}`;

//   const { loading, error } = FetchData(URL_item, setProduct);

//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   if (error) {
//     return <div>Error</div>;
//   }

//   //   if (loading) return <Loading />;
//   //   if (error) return <Error />;

//   return (
//     <div className="App">
//       <h1>{product.title}</h1>
//       <div className="product-details">
//         <img
//           className="product-image"
//           src={product.image}
//           alt={product.title}
//         />
//         <p className="product-description">{product.description}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
