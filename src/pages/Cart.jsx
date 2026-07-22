import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import OrderForm from "../components/OrderForm";
import "../styles/menu.css";

function Cart() {

  const {
    cart,
    increaseQuantity,
    decreaseQuantity
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + (item.price * item.quantity),
    0
  );

  return (

    <div className="menu-container">

      <h1>Your Cart 🛒</h1>

      {cart.length === 0 ? (

        <div className="menu-card">

          <h3>Cart is Empty</h3>

          <p>Please add some items.</p>

        </div>

      ) : (

        cart.map((item) => (

          <div
            className="menu-card"
            key={item.itemKey}
          >

            <h3>{item.name}</h3>

            {item.variant && (

              <p>

                <strong>Size:</strong>

                {" "}

                {item.variant.name}

              </p>

            )}

            {item.addons && item.addons.length > 0 && (

              <div>

                <strong>Extras</strong>

                <ul>

                  {item.addons.map((addon, index) => (

                    <li key={index}>

                      {addon.name}

                      {" (+₹"}

                      {addon.price}

                      {")"}

                    </li>

                  ))}

                </ul>

              </div>

            )}

            {item.instruction && (

              <p>

                <strong>Note:</strong>

                {" "}

                {item.instruction}

              </p>

            )}

            <p>

              Price: ₹{item.price}

            </p>

            <button

              className="add-btn"

              onClick={() =>
                decreaseQuantity(item.itemKey)
              }

            >

              -

            </button>

            <span>

              {" "}

              {item.quantity}

              {" "}

            </span>

            <button

              className="add-btn"

              onClick={() =>
                increaseQuantity(item.itemKey)
              }

            >

              +

            </button>

            <p>

              Item Total:

              {" ₹"}

              {item.price * item.quantity}

            </p>

          </div>

        ))

      )}

      <div className="menu-card">

        <h2>

          Total Amount: ₹{total}

        </h2>

      </div>

      <OrderForm />

    </div>

  );

}

export default Cart;