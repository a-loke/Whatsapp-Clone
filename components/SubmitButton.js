import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../constants/colors";

const SubmitButton = (props) => {
    const enabledBgColorColor = props.color || colors.primary;
    const disabledBgColor = colors.lightGrey;

    const bgColor = props.disabled ? disabledBgColor : enabledBgColorColor;
    return (
        <TouchableOpacity
            onPress={props.disabled ? () => {} : props.onPress}
            style={{
                ...styles.button,
                ...props.style,
                ...{ backgroundColor: bgColor },
            }}
        >
            <Text
                style={{
                    color: props.disabled ? colors.grey : "white",
                    fontFamily: "medium",
                    letterSpacing: 0.3,
                }}
            >
                {props.title}
            </Text>
        </TouchableOpacity>
    );
};

export default SubmitButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
});
