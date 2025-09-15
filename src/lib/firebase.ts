// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Read Firebase configuration from environment variables.
// Use NEXT_PUBLIC_ prefixes for variables that need to be available to the browser.
// IMPORTANT: Do not commit your real secrets to source control.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || undefined,
};

// Basic runtime check — will be `undefined` in environments where env vars aren't set.
if (!firebaseConfig.projectId || !firebaseConfig.apiKey) {
  // eslint-disable-next-line no-console
  console.warn(
    '[firebase] Missing Firebase configuration in environment variables. Please set NEXT_PUBLIC_FIREBASE_* in your environment.'
  );
}

// Initialize Firebase app only once (Next.js may import this file multiple times)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
