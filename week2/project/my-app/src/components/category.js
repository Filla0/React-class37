import React from "react";

const Category = ({ text, onchange, catClicked }) => {
  return (
    <button
      value={text}
      className={catClicked ? "clicked" : ""}
      onClick={(e) => {
        onchange(e.target.value);
      }}
    >
      {text}
    </button>
  );
};

export default Category;
