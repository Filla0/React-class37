const Product = ({ item }) => {
  return (
    <li className="product">
      <img alt={item.description} src={item.image} className="product-image" />
      <p className="product-title"> {item.title}</p>
    </li>
  );
};

export default Product;
