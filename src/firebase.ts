import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth as internalGetAuth } from "firebase/auth";

/**
 * The firebase application.
 */
let app: FirebaseApp;

// initialize firebase if we are on the client
if (typeof window !== "undefined") {
	app = initializeApp({
		apiKey: "AIzaSyCa8c7l6ZwxrDGX5bKwOyiizVekQ-vh5Lc",
		authDomain: "deditapp-auth.firebaseapp.com",
		projectId: "deditapp-auth",
		storageBucket: "deditapp-auth.appspot.com",
		messagingSenderId: "926805131176",
		appId: "1:926805131176:web:e5e8ee0d06a0f37255e79d",
		measurementId: "G-EQPSJRHCST",
	});
}

/**
 * @returns The Firebase application.
 */
export const getApp = () => app;

/**
 * @returns The authentication module of Firebase.
 */
export const getAuth = () => internalGetAuth(app);
