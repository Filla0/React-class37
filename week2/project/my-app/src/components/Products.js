import ProductsItem from "./ProductsItem";
import { useEffect, useState } from "react";
import useFetchData from "../useFetchData.js";

const Products = ({ category }) => {
  const [products, setProducts] = useState([]);
  const categoryURL = `https://fakestoreapi.com/products/category/${category}`;
  const itemsURL = `https://fakestoreapi.com/products`;

  const [url, setUrl] = useState(itemsURL);

  useEffect(() => {
    if (category === "allCategories") {
      setUrl(itemsURL);
    } else {
      setUrl(categoryURL);
    }
  }, [category, itemsURL, categoryURL]);

  const { loading, error } = useFetchData(url, setProducts);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <div className="products">
      {products.map((product) => (
        <ProductsItem key={product.id} item={product} />
      ))}
    </div>
  );
};
export default Products;
