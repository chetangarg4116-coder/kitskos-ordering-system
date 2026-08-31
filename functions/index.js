const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const admin = require("firebase-admin");

admin.initializeApp();

exports.sendNewOrderNotification = onDocumentCreated(
  "orders/{orderId}",
  async (event) => {
    const snapshot = event.data;

    if (!snapshot) {
      console.log("No order data found.");
      return;
    }

    const order = snapshot.data();
    const orderId = event.params.orderId;

    // Get all admin notification tokens
    const tokensSnapshot = await admin
      .firestore()
      .collection("adminTokens")
      .get();

    if (tokensSnapshot.empty) {
      console.log("No admin notification tokens found.");
      return;
    }

    const tokens = tokensSnapshot.docs
      .map((doc) => doc.data().token)
      .filter(Boolean);

    if (tokens.length === 0) {
      console.log("No valid FCM tokens found.");
      return;
    }

    const title = "Kitskos - New Order";
    const body = `Table ${order.tableNumber || "Unknown"} • ₹${
      order.totalAmount || 0
    }`;

    const message = {
      notification: {
        title,
        body,
      },

      data: {
        orderId: String(orderId),
        url: "/admin",
      },

      webpush: {
        headers: {
          Urgency: "high",
        },

        notification: {
          title,
          body,
          icon: "/logo.png",
          badge: "/logo.png",

          // Ask the browser/device to make a notification sound
          silent: false,

          tag: `kitskos-order-${orderId}`,
          requireInteraction: true,
        },

        fcmOptions: {
          link: "/admin",
        },
      },

      tokens,
    };

    try {
      const response =
        await admin.messaging().sendEachForMulticast(message);

      console.log(
        `Notifications sent: ${response.successCount}, failed: ${response.failureCount}`
      );

      // Remove invalid tokens
      const deletePromises = [];

      response.responses.forEach((result, index) => {
        if (!result.success) {
          const errorCode = result.error?.code;

          if (
            errorCode ===
              "messaging/registration-token-not-registered" ||
            errorCode ===
              "messaging/invalid-registration-token"
          ) {
            const tokenToDelete = tokens[index];

            const docs = tokensSnapshot.docs.filter(
              (doc) => doc.data().token === tokenToDelete
            );

            docs.forEach((doc) => {
              deletePromises.push(doc.ref.delete());
            });
          }
        }
      });

      await Promise.all(deletePromises);
    } catch (error) {
      console.error(
        "FCM notification error:",
        error
      );
    }
  }
);