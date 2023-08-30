// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2QfWSRa-PYZ7izz7jdGmcBzl4bD7zKxQ",
    authDomain: "elite-truck-393021.firebaseapp.com",
    databaseURL: "https://elite-truck-393021-default-rtdb.firebaseio.com",
    projectId: "elite-truck-393021",
    storageBucket: "elite-truck-393021.appspot.com",
    messagingSenderId: "100306254489",
    appId: "1:100306254489:web:2162f663bcb56fbd009608",
    measurementId: "G-YKP6XCCJHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);