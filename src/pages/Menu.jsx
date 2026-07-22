import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useContext } from "react";
import menu from "../data/menuData";
import MenuItem from "../components/MenuItem";
import { CartContext } from "../context/CartContext";
import "../styles/menu.css";
import FloatingCart from "../components/FloatingCart";

function Menu() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { cart } = useContext(CartContext);

  const tableNumber = searchParams.get("table");

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    ...menu.map((category) => category.category),
  ];

  const filteredMenu = menu
    .filter((category) =>
      selectedCategory === "All"
        ? true
        : category.category === selectedCategory
    )
    .map((category) => ({
      ...category,
      items: category.items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((category) => category.items.length > 0);

  return (
    <div className="menu-container">

      {/* Restaurant Header */}

      <div className="restaurant-header">

        <h1>🍽️ Kitskos</h1>

        <p>Fresh • Fast • Delicious</p>

        {tableNumber && (
          <div className="table-card">
            🪑 Table No : <strong>{tableNumber}</strong>
          </div>
        )}

      </div>

      {/* Search */}

      <input
        type="text"
        placeholder="🔍 Search your favourite food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br />
      <br />

      {/* Cart */}

      <button
        className="add-btn"
        onClick={() => navigate("/cart")}
      >
        🛒 Cart ({cart.length})
      </button>

      <br />
      <br />

      {/* Categories */}

      <div className="category-buttons">

        {categories.map((category) => (

          <button
            key={category}
            className={`add-btn ${
              selectedCategory === category ? "active-category" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>

        ))}

      </div>

      {/* Menu */}

      {filteredMenu.map((category) => (

        <div key={category.category}>

          <h2 className="category-title">

            {category.category}

          </h2>

          {category.items.map((item) => (

            <MenuItem
              key={item.name}
              item={item}
            />

          ))}
<FloatingCart />
        </div>

      ))}

    </div>
  );
}

export default Menu;