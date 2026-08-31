import {
  getFirestore,
  collection,
  addDoc
} from "firebase/firestore";

import app from "../firebase/config";

const db = getFirestore(app);

export async function saveOrder(order) {
  // 1. Save order to Firestore
  const docRef = await addDoc(
    collection(db, "orders"),
    order
  );

  // 2. Send notification to admin
  try {
    await fetch("/api/send-notification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        orderId: docRef.id,
        tableNumber: order.tableNumber,
        totalAmount: order.totalAmount
      })
    });

    console.log("🔔 Admin notification request sent");
  } catch (error) {
    console.error(
      "Notification request failed:",
      error
    );
  }

  // 3. Return order ID
  return docRef.id;
}