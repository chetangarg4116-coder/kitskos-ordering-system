import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import OrderForm from "../components/OrderForm";
import "../styles/cart.css";

function Cart() {

  const navigate = useNavigate();

  const {
    cart,
    increaseQuantity,
    decreaseQuantity
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + (item.price * item.quantity),
    0
  );

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (

    <div className="cart-container">

      <h1 className="cart-title">
        🛒 Your Cart
      </h1>

      <button
        className="checkout-btn"
        style={{marginBottom:"20px"}}
        onClick={() => navigate("/menu")}
      >
        ← Continue Shopping
      </button>

      {cart.length === 0 ? (

        <div className="empty-cart">

          <h2>Your cart is empty</h2>

          <p>Add some delicious food first.</p>

        </div>

      ) : (

        <>

          {cart.map((item) => (

            <div
              className="cart-item"
              key={item.itemKey}
            >

              <div className="cart-item-top">

                <h3>{item.name}</h3>

                <div className="item-price">
                  ₹{item.price}
                </div>

              </div>

              {item.variant && (

                <p className="variant">

                  <strong>Size :</strong>{" "}

                  {item.variant.name}

                </p>

              )}

              {item.addons && item.addons.length > 0 && (

                <div className="addons">

                  <strong>Extras</strong>

                  <ul>

                    {item.addons.map((addon,index)=>(

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

                <p className="note">

                  <strong>Note :</strong>{" "}

                  {item.instruction}

                </p>

              )}
              {item.comboChoices &&
 Object.keys(item.comboChoices).length > 0 && (

  <div className="addons">

    <strong>Selected Items</strong>

    <ul>

      {Object.entries(item.comboChoices).map(
        ([title, value], index) => (

          <li key={index}>

            <strong>{title}:</strong> {value}

          </li>

        )
      )}

    </ul>

  </div>

)}

              <div className="qty-row">

                <div className="qty-box">

                  <button
                    className="qty-btn"
                    onClick={() =>
                      decreaseQuantity(item.itemKey)
                    }
                  >
                    -
                  </button>

                  <span className="qty-number">

                    {item.quantity}

                  </span>

                  <button
                    className="qty-btn"
                    onClick={() =>
                      increaseQuantity(item.itemKey)
                    }
                  >
                    +
                  </button>

                </div>

                <div className="item-total">

                  ₹{item.price * item.quantity}

                </div>

              </div>

            </div>

          ))}
                    <div className="total-card">

            <div className="total-row">

              <span>Total Items</span>

              <span>{totalItems}</span>

            </div>

            <div className="grand-total">

              <span>Grand Total</span>

              <span>₹{total}</span>

            </div>

          </div>

          <OrderForm />

        </>

      )}

    </div>

  );

}

export default Cart;