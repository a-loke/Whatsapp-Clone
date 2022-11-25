import {
    ActivityIndicator,
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

import userImage from "../assets/images/userImage.jpeg";
import colors from "../constants/colors";
import {
    launchImagePicker,
    updateImageAsync,
} from "../utils/imagePickerHelper";
import { updateSignedInUserData } from "../utils/actions/authAction";
import { useDispatch } from "react-redux";
import { updateLoggedInUserData } from "../store/authSlice";

const ProfilePic = (props) => {
    const dispatch = useDispatch();
    const userId = props.userId;
    const source = props.uri ? { uri: props.uri } : userImage;
    const [image, setImage] = useState(source);
    const [isLoading, setIsLoading] = useState(false);
    const pickImage = async () => {
        try {
            const tempUri = await launchImagePicker();
            if (!tempUri) return;
            setIsLoading(true);
            const uploadUrl = await updateImageAsync(tempUri);
            if (!uploadUrl) {
                throw new Error("Could not upload the image");
            }
            const newData = { profilePicture: uploadUrl };
            await updateSignedInUserData(userId, newData);
            dispatch(updateLoggedInUserData({ newData }));

            setImage({ uri: uploadUrl });
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };

    return (
        <>
            {isLoading ? (
                <View
                    width={props.size}
                    height={props.size}
                    style={{ justifyContent: "center", alignItems: "center" }}
                >
                    <ActivityIndicator size={"small"} color={colors.primary} />
                </View>
            ) : (
                <TouchableOpacity onPress={pickImage}>
                    <Image
                        source={image}
                        style={{
                            ...styles.image,
                            ...{ width: props.size, height: props.size },
                        }}
                    />
                    <View style={styles.editIconContainer}>
                        <FontAwesome name="pencil" size={15} color={"black"} />
                    </View>
                </TouchableOpacity>
            )}
        </>
    );
};

export default ProfilePic;

const styles = StyleSheet.create({
    image: {
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 50,
    },
    editIconContainer: {
        position: "absolute",
        bottom: -5,
        right: -10,
        backgroundColor: colors.lightGrey,
        borderRadius: 20,
        padding: 8,
    },
});
