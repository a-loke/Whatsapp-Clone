import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

import userImage from "../assets/images/userImage.jpeg";
import colors from "../constants/colors";
const ProfilePic = (props) => {
    return (
        <View>
            <Image
                source={userImage}
                style={{
                    ...styles.image,
                    ...{ width: props.size, height: props.size },
                }}
            />
            <View style={styles.editIconContainer}>
                <FontAwesome name="pencil" size={15} color={"black"} />
            </View>
        </View>
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
