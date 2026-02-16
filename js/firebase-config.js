import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB8yT4JpbpKVrE59UnRDYbMWO6QjyguAfo",
  authDomain: "av-elevators-33e0f.firebaseapp.com",
  projectId: "av-elevators-33e0f",
  storageBucket: "av-elevators-33e0f.firebasestorage.app",
  messagingSenderId: "534356263711",
  appId: "1:534356263711:web:f33b3dde9618ce056d662a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
