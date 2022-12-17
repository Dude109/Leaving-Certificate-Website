import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBh9axe_IRWQ9aPq9W8B_7tXQmRd37YzCA",
  authDomain: "lcdbbackup.firebaseapp.com",
  databaseURL: "https://lcdbbackup-default-rtdb.firebaseio.com",
  projectId: "lcdbbackup",
  storageBucket: "lcdbbackup.appspot.com",
  messagingSenderId: "820836112134",
  appId: "1:820836112134:web:124d2ab172a6a8e7b9b087",
  measurementId: "G-VK5SVTW7E9",
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export default db;
