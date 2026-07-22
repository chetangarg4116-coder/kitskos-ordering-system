import { useEffect, useMemo, useState } from "react";
import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  updateDoc
} from "firebase/firestore";
import app from "../firebase/config";
import "../styles/admin.css";

function Admin() {

  const db = getFirestore(app);

 const [orders, setOrders] = useState([]);

const today = new Date().toLocaleDateString("en-IN");

const [selectedDate, setSelectedDate] = useState(today);

const [statusFilter, setStatusFilter] = useState("All");
const [tableSearch, setTableSearch] = useState("");

  useEffect(() => {

    const unsubscribe = onSnapshot(

      collection(db, "orders"),

      (snapshot) => {

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

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
const formatDate = (date) => {

  const d = new Date(date);

  const day = String(d.getDate()).padStart(2,"0");
  const month = String(d.getMonth()+1).padStart(2,"0");
  const year = d.getFullYear();

  return `${day}/${month}/${year}`;

};
const filteredOrders = useMemo(() => {

  return orders.filter((order) => {

    let orderDate = "";

    if (order.createdAt) {

      orderDate = new Date(
        order.createdAt.seconds * 1000
      ).toLocaleDateString("en-IN");

    }

    const matchDate =
      orderDate === selectedDate;

    const matchStatus =
      statusFilter === "All" ||
      order.status === statusFilter;

    const matchTable =
      tableSearch === "" ||
      String(order.tableNumber).includes(tableSearch);

    return matchDate && matchStatus && matchTable;

  });

}, [orders, selectedDate, statusFilter, tableSearch]);
const totalRevenue = useMemo(() => {

  return filteredOrders.reduce(
    (sum, order) => sum + (order.totalAmount || 0),
    0
  );

}, [filteredOrders]);

 const pending = filteredOrders.filter(
    order => order.status === "Pending"
  ).length;

 const preparing = filteredOrders.filter(
    order => order.status === "Preparing"
  ).length;

const ready = filteredOrders.filter(
    order => order.status === "Ready"
  ).length;

  return (

    <div className="admin-container">

      <h1 className="dashboard-title">

        👨‍🍳 Kitskos Kitchen Dashboard

      </h1>

      <div className="summary">

        <div className="summary-card">

          <h2>{filteredOrders.length}</h2>

          <p>Total Orders</p>

        </div>

        <div className="summary-card">

          <h2>₹{totalRevenue}</h2>

          <p>Total Revenue</p>

        </div>

        <div className="summary-card">

          <h2>{pending}</h2>

          <p>Pending</p>

        </div>

        <div className="summary-card">

          <h2>{preparing}</h2>

          <p>Preparing</p>

        </div>

        <div className="summary-card">

          <h2>{ready}</h2>

          <p>Ready</p>

        </div>

      </div>

      <div
style={{
display:"flex",
gap:"20px",
flexWrap:"wrap",
margin:"25px 0"
}}
>

<div>

<label>
<strong>Date</strong>
</label>

<br/>

<input
type="date"
value={
 selectedDate
 ? selectedDate.split("/").reverse().join("-")
 : ""
}
onChange={(e)=>{

setSelectedDate(formatDate(e.target.value));

}}
/>

</div>


<div>

<label>
<strong>Status</strong>
</label>

<br/>

<select
value={statusFilter}
onChange={(e)=>setStatusFilter(e.target.value)}
>

<option>All</option>
<option>Pending</option>
<option>Preparing</option>
<option>Ready</option>
<option>Completed</option>

</select>

</div>


<div>

<label>
<strong>Table Search</strong>
</label>

<br/>

<input
placeholder="Table number"
value={tableSearch}
onChange={(e)=>setTableSearch(e.target.value)}
/>

</div>

</div>
      {
        filteredOrders.length === 0 ?

        (

          <div className="order-card">

            <h2>No Orders Yet</h2>

          </div>

        )

        :

        (

          <div className="orders-grid">

            {filteredOrders.map((order) => (

              <div
                className="order-card"
                key={order.id}
              >

                <h2>

                  🍽 Table {order.tableNumber}

                </h2>

                <p>

                  <strong>Customer :</strong>{" "}

                  {order.customerName}

                </p>

                <p>

                  <strong>Mobile :</strong>{" "}

                  {order.mobileNumber}

                </p>
                <p>
<strong>Date :</strong>{" "}
{
order.createdAt &&
new Date(order.createdAt.seconds * 1000)
.toLocaleDateString("en-IN")
}
</p>

<p>
  <strong>Time :</strong> {order.orderTime}
</p>

                <hr />

                <h3>Ordered Items</h3>

                {order.items.map((item, index) => (

                  <div
                    key={index}
                    style={{ marginBottom: "15px" }}
                  >

                    <strong>

                      {item.quantity} × {item.name}

                    </strong>

                    {item.variant && (

                      <p>

                        Size : {item.variant.name}

                      </p>

                    )}

                    {item.addons &&
                      item.addons.length > 0 && (

                        <div>

                          <strong>Extras</strong>

                          <ul>

                            {item.addons.map((addon, i) => (

                              <li key={i}>

                                {addon.name}

                              </li>

                            ))}

                          </ul>

                        </div>

                    )}                    {item.instruction && (

                      <p>

                        📝 {item.instruction}

                      </p>

                    )}

                  </div>

                ))}

                <hr />

                <h2>

                  ₹{order.totalAmount}

                </h2>

                <h3>

                  Status :

                  <span
                    className={`status ${order.status.toLowerCase()}`}
                    style={{ marginLeft: "10px" }}
                  >

                    {order.status}

                  </span>

                </h3>

                <div className="btn-row">

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

            ))}

          </div>

        )

      }

    </div>

  );

}

export default Admin;