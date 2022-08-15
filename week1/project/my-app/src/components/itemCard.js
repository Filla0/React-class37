import "./itemCard.css";

function Item(props) {
  return (
    <div className="container">
      <img src={props.image} alt={props.title} />
      <span>{props.title}</span>
    </div>
  );
}

export default Item;
