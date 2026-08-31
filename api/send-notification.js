import admin from "firebase-admin";

function getFirebaseAdmin() {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      }),
    });
  }

  return admin;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const firebaseAdmin = getFirebaseAdmin();

    const {
      orderId,
      tableNumber,
      totalAmount,
    } = req.body;

    if (!orderId) {
      return res.status(400).json({
        error: "orderId is required",
      });
    }

    const db = firebaseAdmin.firestore();

    const tokensSnapshot = await db
      .collection("adminTokens")
      .get();

    if (tokensSnapshot.empty) {
      return res.status(404).json({
        error: "No admin notification tokens found",
      });
    }

    const tokens = tokensSnapshot.docs
      .map((doc) => doc.data().token)
      .filter(Boolean);

    if (tokens.length === 0) {
      return res.status(404).json({
        error: "No valid FCM tokens found",
      });
    }

    const message = {
      notification: {
        title: "Kitskos - New Order",
        body: `Table ${tableNumber || "Unknown"} • ₹${
          totalAmount || 0
        }`,
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
          title: "Kitskos - New Order",
          body: `Table ${tableNumber || "Unknown"} • ₹${
            totalAmount || 0
          }`,
          icon: "/logo.png",
          badge: "/logo.png",
          silent: false,
          requireInteraction: true,
          tag: `kitskos-order-${orderId}`,
        },

        fcmOptions: {
          link: "/admin",
        },
      },

      tokens,
    };

    const response =
      await firebaseAdmin
        .messaging()
        .sendEachForMulticast(message);

    console.log(
      `Notifications sent: ${response.successCount}, failed: ${response.failureCount}`
    );

    return res.status(200).json({
      success: true,
      sent: response.successCount,
      failed: response.failureCount,
    });
  } catch (error) {
    console.error("Notification error:", error);

    return res.status(500).json({
      error: error.message,
    });
  }
}