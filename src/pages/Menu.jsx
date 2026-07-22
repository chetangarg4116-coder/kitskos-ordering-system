import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import menu from "../data/menuData";
import MenuItem from "../components/MenuItem";
import "../styles/menu.css";

function Menu() {

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const tableNumber = searchParams.get("table");

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...menu.map((category) => category.category)
  ];

  const filteredMenu =
    selectedCategory === "All"
      ? menu
      : menu.filter(
          (category) =>
            category.category === selectedCategory
        );

  return (

    <div className="menu-container">

      <h1>Kitskos Menu</h1>

      {tableNumber && (
        <h3>Table No: {tableNumber}</h3>
      )}

      <button
        className="add-btn"
        onClick={() => navigate("/cart")}
      >
        🛒 Go To Cart
      </button>

      <br /><br />

      <div className="category-buttons">

        {categories.map((category, index) => (

          <button
            key={index}
            className="add-btn"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>

        ))}

      </div>

      {filteredMenu.map((category, index) => (

        <div key={index}>

          <h2 className="category-title">
            {category.category}
          </h2>

          {category.items.map((item, itemIndex) => (

            <MenuItem
              key={itemIndex}
              item={item}
            />

          ))}

        </div>

      ))}

    </div>

  );

}

export default Menu;