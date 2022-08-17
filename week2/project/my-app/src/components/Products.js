import ProductsItem from "./ProductsItem";
import { useEffect, useState } from "react";
import FetchData from "../Fetch-data.js";

const Products = ({ category }) => {
  console.log(category);
  const [products, setProducts] = useState([]);
  const category_URL = `https://fakestoreapi.com/products/category/${category}`;
  const items_URL = `https://fakestoreapi.com/products`;

  const [url, setUrl] = useState("https://fakestoreapi.com/products");

  useEffect(() => {
    if (category === "allCategories") {
      setUrl(items_URL);
    } else {
      setUrl(category_URL);
    }
  }, [category, items_URL, category_URL]);

  const { loading, error } = FetchData(url, setProducts);

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
  //   const [products, setProducts] = useState([]);
  //   const URL_items = `https://fakestoreapi.com/products`;
  //   const URL_category = `https://fakestoreapi.com/products/category/${category}`;

  //   const URL = category === "allCategories" ? URL_items : URL_category;

  //   const { loading, error } = FetchData(URL, setProducts);
  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }
  //   if (error) {
  //     return <div>Error</div>;
  //   }

  //   return (
  //     <div>
  //       <ul className="products">
  //         {products.map((item) => {
  //           return <ProductsItem key={item.id} item={item} />;
  //         })}
  //       </ul>
  //     </div>
  //   );
};
export default Products;
