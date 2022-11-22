import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

import colors from "../constants/colors";

const Input = (props) => {
    // console.log(icon.package);
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <View style={styles.inputContainer}>
                {props.icon && (
                    <props.pack
                        style={styles.icon}
                        name={props.icon}
                        size={props.size || 15}
                    />
                )}
                <TextInput style={styles.input} />
            </View>
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    label: {
        paddingVertical: 8,
        fontFamily: "bold",
        letterSpacing: 0.3,
        color: colors.textColor,
    },
    inputContainer: {
        width: "100%",
        backgroundColor: colors.nearlyWhite,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 2,
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        marginRight: 10,
        color: colors.grey,
    },
    input: {
        color: colors.textColor,
        flex: 1,
        fontFamily: "regular",
        letterSpacing: 0.3,
        paddingTop: 0,
    },
});
