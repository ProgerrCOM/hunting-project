import { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyD2QfWSRa-PYZ7izz7jdGmcBzl4bD7zKxQ",
    authDomain: "elite-truck-393021.firebaseapp.com",
    databaseURL: "https://elite-truck-393021-default-rtdb.firebaseio.com/",
    projectId: "elite-truck-393021",
    storageBucket: "elite-truck-393021.appspot.com",
    messagingSenderId: "100306254489",
    appId: "1:100306254489:web:2162f663bcb56fbd009608",
    measurementId: "G-YKP6XCCJHQ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const AdminPanel = () => {
    const [error, setError] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    const handleGoogleSignIn = async () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();

        try {
            await signInWithPopup(auth, provider);
            setLoggedIn(true);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h2>Админ панель</h2>
            {loggedIn ? (
                <div>
                    <p>Добро пожаловать! Вы вошли в админ панель.</p>
                </div>
            ) : (
                <div>
                    <h3>Вход в админ панель</h3>
                    <button onClick={handleGoogleSignIn}>Войти через Google</button>
                    {error && <p>{error}</p>}
                </div>
            )}
        </div>
    );
};

export default AdminPanel;
