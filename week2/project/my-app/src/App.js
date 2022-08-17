import "./App.css";
import { useState } from "react";
import CategoryList from "./components/CategoryList.js";
import Products from "./components/Products.js";
import FetchData from "./Fetch-data.js";

const App = () => {
  const [category, setCategory] = useState("allCategories");
  const [categories, setCategories] = useState([]);
  const URL = "https://fakestoreapi.com/products/categories";

  const { loading, error } = FetchData(URL, setCategories);

  return (
    <div className="App">
      <header className="header">
        <h1>Products</h1>
      </header>

      <CategoryList
        allCategories={categories}
        setCategory={setCategory}
        loading={loading}
        error={error}
      />
      <Products category={category} />
    </div>
  );
};

export default App;
