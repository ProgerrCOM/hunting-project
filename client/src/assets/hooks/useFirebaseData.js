import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const useFirebaseData = (collectionName) => {
    const [data, setData] = useState([]);

    useEffect(() => {
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

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        const database = firebase.database();

        const collectionRef = database.ref(collectionName);
        collectionRef.on('value', snapshot => {
            const collectionData = snapshot.val();
            if (collectionData) {
                const collectionArray = Object.values(collectionData);
                setData(collectionArray);
            }
        });

        return () => {
            collectionRef.off();
        };
    }, [collectionName]);

    return data;
};

export default useFirebaseData;
