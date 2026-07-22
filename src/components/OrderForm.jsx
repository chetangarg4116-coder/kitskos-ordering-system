import { useState, useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { saveOrder } from "../services/orderService";
import "../styles/cart.css";

function OrderForm() {

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { cart, clearCart } = useContext(CartContext);

  const [table, setTable] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    const tableNo = searchParams.get("table");
    if (tableNo) {
      setTable(tableNo);
    }
  }, [searchParams]);

  const placeOrder = async () => {

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    if (table.trim() === "") {
      alert("Enter table number.");
      return;
    }

    if (name.trim() === "") {
      alert("Enter customer name.");
      return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      alert("Enter a valid 10 digit mobile number.");
      return;
    }

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

const now = new Date();

const order = {
  tableNumber: table,
  customerName: name,
  mobileNumber: mobile,
  items: cart,
  totalAmount: total,
  status: "Pending",

  createdAt: now,

  orderDate: now.toLocaleDateString("en-IN"),

  orderTime: now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit"
  })
};
    try {

      const orderId = await saveOrder(order);

      clearCart();

      navigate(`/track/${orderId}`);

    } catch (err) {

      console.error(err);

      alert("Failed to place order.");

    }

  };

  return (

    <div className="total-card">

      <h2 style={{marginBottom:"20px"}}>
        Customer Details
      </h2>

      <input
        type="text"
        placeholder="Table Number"
        value={table}
        onChange={(e)=>setTable(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Customer Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <br /><br />

      <input
        type="tel"
        placeholder="Mobile Number"
        maxLength={10}
        value={mobile}
        onChange={(e)=>setMobile(e.target.value)}
      />

      <br /><br />

      <button
        className="checkout-btn"
        onClick={placeOrder}
      >
        🍽 Place Order
      </button>

    </div>

  );

}

export default OrderForm;