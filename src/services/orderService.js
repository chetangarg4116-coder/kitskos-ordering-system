import {
  getFirestore,
  collection,
  addDoc
} from "firebase/firestore";

import app from "../firebase/config";

const db = getFirestore(app);

export async function saveOrder(order) {

  const docRef = await addDoc(
    collection(db, "orders"),
    order
  );

  return docRef.id;

}