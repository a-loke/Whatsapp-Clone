import * as ImagePicker from "expo-image-picker";
import { Platform } from "react-native";
import { getFirebaseApp } from "./firebaseHelper";
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytes,
    uploadBytesResumable,
} from "firebase/storage";
import uuid from "react-native-uuid";

export const launchImagePicker = async () => {
    await checkMediaPermission();

    const resultImage = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
    });
    if (!resultImage.canceled) {
        return resultImage.assets[0].uri;
    }
};

export const updateImageAsync = async (uri) => {
    const app = getFirebaseApp();
    const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            resolve(xhr.response);
        };
        xhr.onerror = function (e) {
            console.log(e);
            reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", uri, true);
        xhr.send();
    });

    const folderPath = "profilePics";
    const storageRef = ref(getStorage(app), `${folderPath}/${uuid.v4()}`);

    await uploadBytesResumable(storageRef, blob);
    blob.close();
    return await getDownloadURL(storageRef);
};

const checkMediaPermission = async () => {
    if (Platform.OS !== "web") {
        const mediaPermission =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (mediaPermission.granted === false) {
            return Promise.reject("We need permission to access images");
        }
    }
    return Promise.resolve();
};
