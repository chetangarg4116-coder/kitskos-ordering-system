import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { saveOrder } from "../services/orderService";

function OrderForm() {

  const navigate = useNavigate();

  const { cart, clearCart } = useContext(CartContext);

  const [table, setTable] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const placeOrder = async () => {

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    if (table.trim() === "") {
      alert("Please enter table number.");
      return;
    }

    if (name.trim() === "") {
      alert("Please enter customer name.");
      return;
    }

    if (mobile.length !== 10) {
      alert("Please enter a valid 10 digit mobile number.");
      return;
    }

    const total = cart.reduce(
      (sum, item) => sum + (item.price * item.quantity),
      0
    );

    const order = {
      tableNumber: table,
      customerName: name,
      mobileNumber: mobile,
      items: cart,
      totalAmount: total,
      status: "Pending",
      createdAt: new Date()
    };

    try {

      const orderId = await saveOrder(order);

      console.log("Order ID:", orderId);

      if (!orderId) {
        alert("Order ID not received.");
        return;
      }

      clearCart();

      setTable("");
      setName("");
      setMobile("");
alert(orderId);

      navigate(`/track/${orderId}`);

    } catch (error) {

      console.error(error);

      alert("Failed to place order.");

    }

  };

  return (

    <div className="menu-card">

      <h2>Customer Details</h2>

      <input
        type="text"
        placeholder="Table Number"
        value={table}
        onChange={(e) => setTable(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Customer Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="tel"
        placeholder="Mobile Number"
        maxLength={10}
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />

      <br /><br />

      <button
        className="add-btn"
        onClick={placeOrder}
      >
        Place Order
      </button>

    </div>

  );

}

export default OrderForm;