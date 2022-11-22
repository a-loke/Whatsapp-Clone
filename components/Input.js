import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import colors from "../constants/colors";

const Input = (props) => {
    return (
        <View style={styles.container}>
            <Text>{props.label}</Text>
            <View style={styles.inputContainer}>
                <TextInput />
            </View>
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    inputContainer: {
        width: "100%",
        backgroundColor: colors.nearlyWhite,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 2,
    },
});
