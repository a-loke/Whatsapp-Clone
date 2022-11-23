import { child, get, getDatabase, ref } from "firebase/database";
import { getFirebaseApp } from "../firebaseHelper";

export const getUserData = async (userId) => {
    try {
        const app = getFirebaseApp();
        const dbRef = ref(getDatabase(app));
        const user = child(dbRef, `users/${userId}`);

        const userData = await get(user);
        return userData.val();
    } catch (error) {
        console.log(error);
    }
};
