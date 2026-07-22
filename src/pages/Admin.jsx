import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  updateDoc
} from "firebase/firestore";
import app from "../firebase/config";

function Admin() {

  const [orders, setOrders] = useState([]);

  const db = getFirestore(app);

  useEffect(() => {

    const unsubscribe = onSnapshot(
      collection(db, "orders"),
      (snapshot) => {

        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        // Latest orders first
        data.sort((a, b) => {
          if (!a.createdAt || !b.createdAt) return 0;
          return b.createdAt.seconds - a.createdAt.seconds;
        });

        setOrders(data);

      }
    );

    return () => unsubscribe();

  }, []);

  const updateStatus = async (id, status) => {

    await updateDoc(
      doc(db, "orders", id),
      {
        status
      }
    );

  };

  return (

    <div className="menu-container">

      <h1>👨‍🍳 Kitchen Dashboard</h1>

      <h3>Total Orders : {orders.length}</h3>

      {

        orders.length === 0 ?

          <div className="menu-card">

            <h2>No Orders</h2>

          </div>

        :

          orders.map((order) => (

            <div
              className="menu-card"
              key={order.id}
            >

              <h2>

                🍽 Table {order.tableNumber}

              </h2>

              <p>

                <strong>Customer :</strong>

                {" "}

                {order.customerName}

              </p>

              <p>

                <strong>Mobile :</strong>

                {" "}

                {order.mobileNumber}

              </p>

              <hr />

              <h3>Ordered Items</h3>

              {

                order.items.map((item, index) => (

                  <div
                    key={index}
                    style={{
                      marginBottom: "15px"
                    }}
                  >

                    <strong>

                      {item.quantity} × {item.name}

                    </strong>

                    {

                      item.variant && (

                        <p>

                          Size :

                          {" "}

                          {item.variant.name}

                        </p>

                      )

                    }

                    {

                      item.addons &&
                      item.addons.length > 0 && (

                        <div>

                          Extras :

                          <ul>

                            {

                              item.addons.map((addon, i) => (

                                <li key={i}>

                                  {addon.name}

                                </li>

                              ))

                            }

                          </ul>

                        </div>

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

                ₹{order.totalAmount}

              </h2>

              <h3>

                Status :

                {" "}

                {order.status}

              </h3>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap"
                }}
              >

                <button
                  className="add-btn"
                  onClick={() =>
                    updateStatus(order.id, "Pending")
                  }
                >
                  Pending
                </button>

                <button
                  className="add-btn"
                  onClick={() =>
                    updateStatus(order.id, "Preparing")
                  }
                >
                  Preparing
                </button>

                <button
                  className="add-btn"
                  onClick={() =>
                    updateStatus(order.id, "Ready")
                  }
                >
                  Ready
                </button>

                <button
                  className="add-btn"
                  onClick={() =>
                    updateStatus(order.id, "Completed")
                  }
                >
                  Completed
                </button>

              </div>

            </div>

          ))

      }

    </div>

  );

}

export default Admin;