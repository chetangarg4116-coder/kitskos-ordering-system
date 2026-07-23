import { useEffect, useMemo, useState, useRef } from "react";
import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc
} from "firebase/firestore";

import app from "../firebase/config";
import "../styles/admin.css";


function Admin() {

  const db = getFirestore(app);

// Fixed date format
const today = new Date();

const todayFormatted =
  `${String(today.getDate()).padStart(2, "0")}/${String(today.getMonth() + 1).padStart(2, "0")}/${today.getFullYear()}`;

const [orders, setOrders] = useState([]);
const [loading, setLoading] = useState(true);
const [selectedDate, setSelectedDate] = useState(todayFormatted);

const [statusFilter, setStatusFilter] = useState("All");
const [tableSearch, setTableSearch] = useState("");

const [notification, setNotification] = useState("");

const notificationSound = useRef(null);

const previousOrderCount = useRef(0);

useEffect(() => {

  const unlockAudio = () => {

    if(notificationSound.current){

      notificationSound.current.play()
      .then(()=>{

        notificationSound.current.pause();
        notificationSound.current.currentTime = 0;

      })
      .catch(()=>{});

    }

  };


  window.addEventListener("click", unlockAudio, { once:true });


  return () => {
    window.removeEventListener("click", unlockAudio);
  };


}, []);

useEffect(() => {
  if(!notificationSound.current){
  notificationSound.current = new Audio("/notification.mp3");
  notificationSound.current.volume = 1;
}

  const unsubscribe = onSnapshot(
    collection(db, "orders"),
    (snapshot) => {

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));


      // 🔔 NEW ORDER ALERT
      const newOrder = snapshot.docChanges()
        .some(
          change => change.type === "added"
        );


      if(newOrder && previousOrderCount.current !== 0){

        setNotification("🔔 New Order Received!");

const sound = notificationSound.current;

sound.currentTime = 0;

sound.play()
.then(() => {
  console.log("Notification sound played");
})
notificationSound.current.currentTime = 0;

if(notificationSound.current){

  notificationSound.current.currentTime = 0;

  notificationSound.current.play()
  .then(()=>{
    console.log("Sound played");
  })
  .catch((error)=>{
    console.log("Sound error:", error);
  });

}


        setTimeout(()=>{
          setNotification("");
        },5000);

      }


      previousOrderCount.current = snapshot.size;


      data.sort((a,b)=>{

        return b.createdAt?.seconds - a.createdAt?.seconds;

      });


      setOrders(data);
      setLoading(false);

    }
  );


  return () => unsubscribe();


}, []);



  // Update order status

  const updateStatus = async(id,status)=>{

    await updateDoc(
      doc(db,"orders",id),
      {
        status
      }
    );

  };
  // Delete Order

const deleteOrder = async(id)=>{

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this order?"
  );

  if(!confirmDelete) return;


  await deleteDoc(
    doc(db,"orders",id)
  );

};



  // Convert date

  const formatDate = (date)=>{

    const d = new Date(date);

    const day = String(d.getDate()).padStart(2,"0");

    const month = String(d.getMonth()+1).padStart(2,"0");

    const year = d.getFullYear();


    return `${day}/${month}/${year}`;

  };



  const filteredOrders = useMemo(()=>{


    return orders.filter((order)=>{


let orderDate = "";

if(order.createdAt){

  const date = new Date(
    order.createdAt.seconds * 1000
  );

  const day = String(date.getDate()).padStart(2,"0");
  const month = String(date.getMonth()+1).padStart(2,"0");
  const year = date.getFullYear();

  orderDate = `${day}/${month}/${year}`;

}


const matchDate = orderDate === selectedDate;
console.log(
  "Order Date:",
  orderDate,
  "Selected Date:",
  selectedDate
);



      const matchStatus =
      statusFilter==="All" ||
      order.status===statusFilter;



      const matchTable =
      tableSearch==="" ||
      String(order.tableNumber)
      .includes(tableSearch);



return matchDate &&
       matchStatus &&
       matchTable;

    });


  },[
    orders,
    selectedDate,
    statusFilter,
    tableSearch
  ]);



  const totalRevenue = useMemo(()=>{

    return filteredOrders.reduce(
      (sum,order)=>
      sum+(order.totalAmount || 0),
      0
    );

  },[filteredOrders]);



  const pending =
  filteredOrders.filter(
    order=>order.status==="Pending"
  ).length;



  const preparing =
  filteredOrders.filter(
    order=>order.status==="Preparing"
  ).length;



  const ready =
  filteredOrders.filter(
    order=>order.status==="Ready"
  ).length;



  const cancelled =
  filteredOrders.filter(
    order=>order.status==="Cancelled"
  ).length;
return (

  <>
  
  {notification && (
    <div className="notification-alert">
      {notification}
    </div>
  )}

  <div className="admin-container">


      <h1 className="dashboard-title">
        👨‍🍳 Kitskos Kitchen Dashboard
      </h1>
{
notification &&

<div
style={{

position:"fixed",

top:"20px",

right:"20px",

background:"green",

color:"white",

padding:"15px 25px",

borderRadius:"10px",

fontSize:"18px",

fontWeight:"bold",

zIndex:9999

}}

>

{notification}

</div>

}


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



        <div className="summary-card">
          <h2>{cancelled}</h2>
          <p>Cancelled</p>
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
        .split("/")
        .reverse()
        .join("-")
      }


      onChange={(e)=>{

        setSelectedDate(
          formatDate(e.target.value)
        );

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

      onChange={(e)=>
      setStatusFilter(e.target.value)
      }

      >

      <option>All</option>
      <option>Pending</option>
      <option>Preparing</option>
      <option>Ready</option>
      <option>Completed</option>
      <option>Cancelled</option>

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

      onChange={(e)=>
      setTableSearch(e.target.value)
      }

      />


      </div>


      </div>







      {
      filteredOrders.length===0

      ?

      <div className="order-card">

      <h2>No Orders Yet</h2>

      </div>


      :


      <div className="orders-grid">


      {
      filteredOrders.map((order)=>(


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
      new Date(
      order.createdAt.seconds*1000
      )
      .toLocaleDateString("en-IN")
      }
      </p>



      <p>
      <strong>Time :</strong>{" "}
      {order.orderTime}
      </p>



      <hr/>




<h3>Ordered Items</h3>

{
  order.items.map((item, index) => (

    <div
      key={index}
      style={{ marginBottom: "15px" }}
    >

      <strong>
        {item.quantity} × {item.name}
      </strong>

      {item.selectedVariant && (
        <p>
          📏 Size: {item.selectedVariant.name}
        </p>
      )}

      {item.toppings?.length > 0 && (
        <p>
          🍕 Toppings: {item.toppings.join(", ")}
        </p>
      )}

      {item.base && (
        <p>
          🧀 Base: {item.base.name} (+₹{item.base.price})
        </p>
      )}

      {item.addons?.length > 0 && (
        <p>
          ➕ Extras: {item.addons.map(addon => addon.name).join(", ")}
        </p>
      )}

      {item.comboChoices &&
        Object.keys(item.comboChoices).length > 0 && (
          <div>
            <strong>Selected Items</strong>

            <ul>
              {Object.entries(item.comboChoices).map(
                ([title, value], i) => (
                  <li key={i}>
                    <strong>{title}:</strong> {value}
                  </li>
                )
              )}
            </ul>
          </div>
      )}

      {item.instruction && (
        <p>
          📝 {item.instruction}
        </p>
      )}

    </div>

  ))
}
      <hr/>



      <h2>
      ₹{order.totalAmount}
      </h2>



      <h3>

      Status :

      <span
      className={`status ${order.status.toLowerCase()}`}
      style={{marginLeft:"10px"}}
      >

{
  order.status === "Cancelled"
  ? "❌ Cancelled"
  : order.status
}
      </span>

      </h3>






      <div className="btn-row">



      <button
      className="add-btn"
      onClick={()=>
      updateStatus(order.id,"Pending")
      }
      >
      Pending
      </button>





      <button
      className="add-btn"
      onClick={()=>
      updateStatus(order.id,"Preparing")
      }
      >
      Preparing
      </button>





      <button
      className="add-btn"
      onClick={()=>
      updateStatus(order.id,"Ready")
      }
      >
      Ready
      </button>





      <button
     className="add-btn"
      onClick={()=>
      updateStatus(order.id,"Completed")
      }
      >
      Completed
      </button>





      <button

      className="add-btn"

      style={{
        background:"red"
      }}

      onClick={()=>
      updateStatus(order.id,"Cancelled")
      }

      >

      Cancel Order

      </button>
      <button

className="add-btn"

style={{
  background:"black"
}}

onClick={()=>
deleteOrder(order.id)
}

>

Delete Order

</button>




      </div>



      </div>


       ))
}
     


      </div>


      }



   </div>

</>
);

}

export default Admin; 