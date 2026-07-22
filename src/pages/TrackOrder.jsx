import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  getFirestore,
  doc,
  onSnapshot
} from "firebase/firestore";
import app from "../firebase/config";
import "../styles/track.css";

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

      <div className="track-container">

        <div className="track-card">

          <h2 style={{textAlign:"center"}}>

            Loading Order...

          </h2>

        </div>

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

    <div className="track-container">

      <div className="track-card">

        <div className="track-header">

          <h1>🍔 Kitskos</h1>

          <h2>Order Tracking</h2>

          <p>

            Thank you for ordering with us ❤️

          </p>

        </div>

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
        <p>
  <strong>Date :</strong> {order.orderDate}
</p>

<p>
  <strong>Time :</strong> {order.orderTime}
</p>

        <hr />

        <div className="order-items">

          <h3>Your Order</h3>

          {

            order.items.map((item,index)=>(

              <div

                key={index}

                className="order-item"

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

                  item.addons.length>0 && (

                    <ul>

                      {

                        item.addons.map((addon,i)=>(

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

        </div>

        <div className="total-box">

          <span>Total</span>

          <span>

            ₹{order.totalAmount}

          </span>

        </div>

        <div className="track-status">

          <h2>

            Current Status

          </h2>

          <div

            className={`status-pill ${order.status}`}

          >

            {getStatusEmoji()} {order.status}

          </div>

        </div>

        <div className="time-box">

          ⏱ Estimated Preparation Time

          <br /><br />

          <strong>

            15–20 Minutes

          </strong>

        </div>

        <br />

        <Link to="/menu">

          <button

            className="checkout-btn"

          >

            🍽 Order Again

          </button>

        </Link>

      </div>

    </div>

  );

}

export default TrackOrder;