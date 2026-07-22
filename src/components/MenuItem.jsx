import { useContext, useState } from "react";
import AddonSelector from "./AddonSelector";
import { CartContext } from "../context/CartContext";
import "../styles/menu.css";

import burgerImg from "../assets/images/burger.avif";
import friesImg from "../assets/images/fries.avif";
import pastaImg from "../assets/images/Pasta.jpg";
import sandwichImg from "../assets/images/Grilled sandwich.jpg";
import maggieImg from "../assets/images/maggie.jpg";
import wrapImg from "../assets/images/wrap.jpeg";
import drinkImg from "../assets/images/coco cola.jfif";
import mojitoImg from "../assets/images/mojito.avif";
import shakeImg from "../assets/images/shake.avif";
import dessertImg from "../assets/images/deserdt.avif";
import iceCreamImg from "../assets/images/ice ream.jfif";
import momosImg from "../assets/images/momos.avif";

function MenuItem({ item }) {

  const { addToCart } = useContext(CartContext);

  const [selection, setSelection] = useState({
    addons: [],
    variant: null,
    instruction: ""
  });

  const getImage = () => {

    const name = item.name.toLowerCase();

    if (name.includes("burger")) return burgerImg;
    if (name.includes("fries")) return friesImg;
    if (name.includes("pasta")) return pastaImg;
    if (name.includes("sandwich")) return sandwichImg;
    if (name.includes("maggi")) return maggieImg;
    if (name.includes("wrap")) return wrapImg;
    if (name.includes("mojito")) return mojitoImg;
    if (name.includes("shake")) return shakeImg;
    if (
      name.includes("brownie") ||
      name.includes("chocolawa")
    ) return dessertImg;

    if (
      name.includes("vanilla") ||
      name.includes("butterscotch") ||
      name === "chocolate"
    ) return iceCreamImg;

    if (
      name.includes("momos") ||
      name.includes("spring roll")
    ) return momosImg;

    if (
      name.includes("coffee") ||
      name.includes("coke") ||
      name.includes("tea") ||
      name.includes("juice") ||
      name.includes("beer")
    ) return drinkImg;

    return burgerImg;

  };

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

      <img
        src={getImage()}
        alt={item.name}
        className="food-image"
      />

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