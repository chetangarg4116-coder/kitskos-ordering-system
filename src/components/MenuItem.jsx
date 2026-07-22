import { useContext, useState } from "react";
import AddonSelector from "./AddonSelector";
import { CartContext } from "../context/CartContext";
import "../styles/menu.css";

function MenuItem({ item }) {

  const { addToCart } = useContext(CartContext);

  const [selection, setSelection] = useState({
    addons: [],
    variant: null,
    instruction: ""
  });

  const handleAdd = () => {

    let basePrice = item.price || 0;

    if (selection.variant) {
      basePrice = selection.variant.price;
    }

    const addonPrice = selection.addons.reduce(
      (total, addon) => total + addon.price,
      0
    );

    const finalPrice = basePrice + addonPrice;

    addToCart({

      ...item,

      price: finalPrice,

      basePrice,

      variant: selection.variant,

      addons: selection.addons,

      instruction: selection.instruction

    });

    alert(`${item.name} added to cart`);

  };

  return (

    <div className="menu-card">

      <h3>{item.name}</h3>

      <p>{item.description}</p>

      <p className="price">

        ₹{item.price}

      </p>

      <AddonSelector

        addons={item.addons || []}

        variants={item.variants || []}

        onChange={setSelection}

      />

      <br />

      <button

        className="add-btn"

        onClick={handleAdd}

      >

        Add to Cart

      </button>

    </div>

  );

}

export default MenuItem;