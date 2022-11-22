import {
    Button,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

import backgroundimage from "../assets/images/backgroundimage.jpeg";
import colors from "../constants/colors";

const ChatScreen = () => {
    return (
        <SafeAreaView
            edges={["right", "bottom", "left"]}
            style={styles.container}
        >
            <ImageBackground
                source={backgroundimage}
                style={styles.bgimage}
            ></ImageBackground>

            <View style={styles.inputContainer}>
                <TouchableOpacity
                    style={styles.mediaButton}
                    onPress={() => console.log("Pressed!")}
                >
                    <Feather name="plus" size={24} color={colors.blue} />
                </TouchableOpacity>
                <TextInput style={styles.textarea} />
                <TouchableOpacity
                    style={styles.mediaButton}
                    onPress={() => console.log("Pressed!")}
                >
                    <Feather name="camera" size={24} color={colors.blue} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ChatScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    bgimage: {
        flex: 1,
    },
    inputContainer: {
        flexDirection: "row",
        paddingVertical: 8,
        paddingHorizontal: 10,
        height: 50,
    },
    textarea: {
        flex: 1,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: colors.lightGrey,
        marginHorizontal: 15,
        paddingHorizontal: 12,
    },
    mediaButton: {
        justifyContent: "center",
        alignItems: "center",
        width: 35,
    },
});
