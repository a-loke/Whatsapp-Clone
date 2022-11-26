import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";

import ProfilePic from "./ProfilePic";
import colors from "../constants/colors";
const DataItem = (props) => {
    const { title, subtitle, image } = props;
    return (
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                <ProfilePic uri={image} size={40} showEditButton={false} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default DataItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 1,
        paddingVertical: 8,
        minHeight: 50,
    },
    textContainer: {
        marginLeft: 14,
    },
    title: {
        fontFamily: "medium",
        fontSize: 16,
        letterSpacing: 0.3,
    },
    subtitle: {
        fontFamily: "regular",
        color: colors.grey,
    },
});
