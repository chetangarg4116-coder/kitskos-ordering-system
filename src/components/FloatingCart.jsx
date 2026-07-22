import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function FloatingCart() {

  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  if (cart.length === 0) return null;

  return (

    <button
      className="floating-cart"
      onClick={() => navigate("/cart")}
    >
      🛒 Cart ({cart.length})
      <br />
      View Cart →
    </button>

  );

}

export default FloatingCart;