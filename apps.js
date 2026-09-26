// ফায়ারবেস কনফিগারেশন এবং ইনিশিয়ালাইজেশন
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC3Xqj-5wd01zE52J9pUk1w8IW7o073q-E",
  authDomain: "mybetapp-9768b.firebaseapp.com",
  projectId: "mybetapp-9768b",
  storageBucket: "mybetapp-9768b.firebasestorage.app",
  messagingSenderId: "856211044946",
  appId: "1:856211044946:web:25687cd95d276aadd77d8b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// অন্যান্য পেজ থেকে যেন সহজেই ব্যবহার করা যায়, তাই উইন্ডো অবজেক্টে যুক্ত করা হলো
window.db = db;
window.collection = collection;
window.addDoc = addDoc;
window.getDocs = getDocs;
window.updateDoc = updateDoc;
window.doc = doc;
window.getDoc = getDoc;
