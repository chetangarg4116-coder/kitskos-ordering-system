import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  getFirestore,
  doc,
  onSnapshot
} from "firebase/firestore";
import app from "../firebase/config";
import "../styles/menu.css";

function TrackOrder() {

  const { id } = useParams();

  const [order, setOrder] = useState(null);

  const db = getFirestore(app);

  useEffect(() => {

    const unsubscribe = onSnapshot(

      doc(db, "orders", id),

      (docSnap) => {

        if (docSnap.exists()) {

          setOrder({

            id: docSnap.id,

            ...docSnap.data()

          });

        }

      }

    );

    return () => unsubscribe();

  }, [id]);

  if (!order) {

    return (

      <div className="menu-container">

        <h2>Loading Order...</h2>

      </div>

    );

  }

  const getStatusEmoji = () => {

    switch (order.status) {

      case "Pending":
        return "🟡";

      case "Preparing":
        return "🟠";

      case "Ready":
        return "🟢";

      case "Completed":
        return "⚫";

      default:
        return "🟡";

    }

  };

  return (

    <div className="menu-container">

      <div className="menu-card">

        <h1>🍔 Kitskos</h1>

        <h2>Order Tracking</h2>

        <hr />

        <p>

          <strong>Order ID :</strong>

          {order.id}

        </p>

        <p>

          <strong>Table :</strong>

          {order.tableNumber}

        </p>

        <p>

          <strong>Customer :</strong>

          {order.customerName}

        </p>

        <hr />

        <h3>Your Order</h3>

        {

          order.items.map((item, index) => (

            <div
              key={index}
              style={{ marginBottom: "20px" }}
            >

              <strong>

                {item.quantity} × {item.name}

              </strong>

              {

                item.variant && (

                  <p>

                    Size : {item.variant.name}

                  </p>

                )

              }

              {

                item.addons &&
                item.addons.length > 0 && (

                  <ul>

                    {

                      item.addons.map((addon, i) => (

                        <li key={i}>

                          {addon.name}

                        </li>

                      ))

                    }

                  </ul>

                )

              }

              {

                item.instruction && (

                  <p>

                    📝 {item.instruction}

                  </p>

                )

              }

            </div>

          ))

        }

        <hr />

        <h2>

          Total : ₹{order.totalAmount}

        </h2>

        <h2>

          {getStatusEmoji()} {order.status}

        </h2>

        <hr />

        <Link to="/menu">

          <button className="add-btn">

            Order Again

          </button>

        </Link>

      </div>

    </div>

  );

}

export default TrackOrder;