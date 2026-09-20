// import { initializeApp, cert } from "firebase-admin/app";

// import serviceAccount from "../serviceAccountKey.json" with { type: "json" };

// export const app = initializeApp({
//   credential: cert(serviceAccount),
// });

import "dotenv/config";
import { initializeApp, cert } from "firebase-admin/app";

if (!process.env.FIREBASE_SERVICE_ACCOUNT_BASE64) {
  throw new Error("FIREBASE_SERVICE_ACCOUNT_BASE64 is missing");
}

const serviceAccount = JSON.parse(
  Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_BASE64, "base64").toString("utf8")
);

export const app = initializeApp({
  credential: cert(serviceAccount),
});