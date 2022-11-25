import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

import userImage from "../assets/images/userImage.jpeg";
import colors from "../constants/colors";
import {
    launchImagePicker,
    updateImageAsync,
} from "../utils/imagePickerHelper";
const ProfilePic = (props) => {
    const source = props.uri ? { uri: props.uri } : userImage;
    const [image, setImage] = useState(source);
    const pickImage = async () => {
        try {
            const tempUri = await launchImagePicker();
            if (!tempUri) return;
            const uploadUrl = await updateImageAsync(tempUri);
            if (!uploadUrl) {
                throw new Error("Could not upload the image");
            }
            setImage({ uri: uploadUrl });
        } catch (error) {
            console.log(error);
        }
    };

    return (
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
