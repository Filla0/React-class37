import { Link } from "react-router-dom";

function ProductsItem({ item }) {
  return (
    <li className="products-item">
      <div className="item">
        <Link to={`/product/${item.id}`}>
          <img src={item.image} alt={item.title} className="product-image" />
          <p>{item.title}</p>
        </Link>
      </div>
    </li>
  );
}

export default ProductsItem;
