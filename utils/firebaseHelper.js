import { initializeApp } from "firebase/app";

export const getFirebaseApp = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyDGcHwNQFZH_7mWZvOh48PAv9GG6dxvXO0",
        authDomain: "whatsapp-a2775.firebaseapp.com",
        projectId: "whatsapp-a2775",
        storageBucket: "whatsapp-a2775.appspot.com",
        messagingSenderId: "95046659039",
        appId: "1:95046659039:web:5e76a96cac961866a6b26a",
        measurementId: "G-4FBB1PFEW7",
    };

    // Initialize Firebase
    return initializeApp(firebaseConfig);
};
