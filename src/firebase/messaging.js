import {
  getMessaging,
  getToken,
  onMessage
} from "firebase/messaging";

import {
  getFirestore,
  doc,
  setDoc
} from "firebase/firestore";

import app from "./config";

const messaging = getMessaging(app);
const db = getFirestore(app);

const VAPID_KEY =
   "BFKqtuIaAzrpxRhbbbl3smgEh0V-25ioOBKoE3wd2ItaR6GhBB3sO1jMaSFNOFCdIEClwFDMkfEo0oZEtSeJ9jc";

export const requestNotificationPermission = async () => {
  try {
    const permission =
      await Notification.requestPermission();

    if (permission !== "granted") {
      console.log("Notification permission denied.");
      return null;
    }

    // Register service worker manually
const registration =
  await navigator.serviceWorker.register(
    "/firebase-messaging-sw.js"
  );

console.log("Service worker installing...");

await navigator.serviceWorker.ready;

const activeRegistration =
  await navigator.serviceWorker.getRegistration("/");

console.log(
  "Active service worker:",
  activeRegistration
);

    // Get FCM token
console.log("Starting FCM token request...");

const token = await getToken(messaging, {
  vapidKey: VAPID_KEY,
  serviceWorkerRegistration: activeRegistration
});

console.log("getToken completed.");

if (!token) {
  console.log("No FCM token received.");
  return null;
}

console.log("FCM Token:", token);

    if (!token) {
      console.log("No FCM token received.");
      return null;
    }

    console.log("FCM Token:", token);

    // Save token to Firestore
    await setDoc(
      doc(db, "adminTokens", token),
      {
        token: token,
        createdAt: new Date()
      },
      { merge: true }
    );

    console.log(
      "FCM token saved to Firestore."
    );

    return token;

  } catch (error) {
    console.error(
      "FCM permission/token error:",
      error
    );

    return null;
  }
};

export const listenForMessages = (callback) => {
  return onMessage(messaging, (payload) => {
    console.log(
      "Foreground notification:",
      payload
    );

    if (callback) {
      callback(payload);
    }
  });
};