import * as ImagePicker from "expo-image-picker";
import { Platform } from "react-native";

export const launchImagePicker = async () => {
    await checkMediaPermission();
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
