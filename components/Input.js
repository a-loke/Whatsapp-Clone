import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import colors from "../constants/colors";

const Input = (props) => {
    const [value, setValue] = useState(props.initialValue);
    const handleTextChange = (text) => {
        setValue(text);
        props.onChangedInput(props.id, text);
    };
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
                <TextInput
                    {...props}
                    onChangeText={handleTextChange}
                    style={styles.input}
                    value={value}
                />
            </View>
            {props.errorText && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{props.errorText[0]}</Text>
                </View>
            )}
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
    errorContainer: {
        paddingVertical: 5,
    },
    errorText: {
        color: "red",
        fontSize: 13,
        fontFamily: "regular",
        letterSpacing: 0.3,
    },
});
