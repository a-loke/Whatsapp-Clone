import { child, get, getDatabase, ref } from "firebase/database";
import { getFirebaseApp } from "../firebaseHelper";

export const getUserData = async (userId) => {
    try {
        const app = getFirebaseApp();
        const dbRef = ref(getDatabase(app));
        const user = child(dbRef, `users/${userId}`);

        const snapshot = await get(user);
        return snapshot.val();
    } catch (error) {
        console.log(error);
    }
};
