import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyDSZBT7zCYgv5v7uKOYHIqFuEWGerqJWrE",
    authDomain: "expenseease-68508.firebaseapp.com",
    projectId: "expenseease-68508",
    storageBucket: "expenseease-68508.appspot.com",
    messagingSenderId: "972696464530",
    appId: "1:972696464530:web:0582e25bab50564b514a4b",
    measurementId: "G-NSS74X78C4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;