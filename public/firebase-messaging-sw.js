importScripts("https://www.gstatic.com/firebasejs/12.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.0.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCOa-PHa9GaK48SsQvqxWQc1zFc_ihkhfs",
  authDomain: "kitskos-ordering.firebaseapp.com",
  projectId: "kitskos-ordering",
  storageBucket: "kitskos-ordering.firebasestorage.app",
  messagingSenderId: "678318059790",
  appId: "1:678318059790:web:4cca414f4478f56ea8a75f"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log("Background message received:", payload);

  const title =
    payload.notification?.title || "Kitskos - New Order";

  const options = {
    body:
      payload.notification?.body || "New order received!",
    icon: "/logo.png",
    badge: "/logo.png",
    data: {
      url: "/admin"
    }
  };

  self.registration.showNotification(title, options);
});