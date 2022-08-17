import { useState } from "react";

function CategoryList({ allCategories, setCategory, loading, error }) {
  const [activeButton, setActiveButton] = useState(null);

  const toggle = (index, item) => {
    if (activeButton === index) {
      setCategory("allCategories");
      setActiveButton(null);
    } else {
      setCategory(item);
      setActiveButton(index);
    }
  };

  const activeToggle = (index) => {
    if (activeButton === index) {
      return "category-item-selected";
    } else {
      return "category-item";
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="container">
      {allCategories.map((item, index) => {
        return (
          <button
            key={index}
            className={activeToggle(index)}
            onClick={() => {
              toggle(index, item);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryList;
