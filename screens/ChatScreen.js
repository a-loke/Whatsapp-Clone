import {
    Button,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

import backgroundimage from "../assets/images/backgroundimage.jpeg";
import colors from "../constants/colors";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import PageContainer from "../components/PageContainer";
import Bubble from "../components/Bubble";

const ChatScreen = (props) => {
    const navigation = useNavigation();
    const storedUsers = useSelector((state) => state.users.storedUsers);
    const userData = useSelector((state) => state.auth.userData);

    const [chatUsers, setChatUsers] = useState([]);
    const [messageText, setMessageText] = useState("");
    const [chatId, setChatId] = useState(props.route?.params?.chatId);

    const newChat = props.route?.params?.newChatData;

    const getOtherChatUserName = () => {
        if (!newChat) {
            return "";
        }
        const otherChatUserId = newChat.users[0];
        const otherChatUserData = storedUsers[otherChatUserId];
        return (
            otherChatUserData &&
            `${otherChatUserData.firstName} ${otherChatUserData.lastName}`
        );
    };

    useEffect(() => {
        navigation.setOptions({
            headerTitle: getOtherChatUserName(),
        });
        setChatUsers(newChat);
    }, [chatUsers]);
    const sendMessage = useCallback(() => {
        setMessageText("");
    }, [messageText]);
    return (
        <SafeAreaView
            edges={["right", "bottom", "left"]}
            style={styles.container}
        >
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                keyboardVerticalOffset={100}
            >
                <ImageBackground
                    source={backgroundimage}
                    style={styles.bgimage}
                >
                    <PageContainer style={{ backgroundColor: "transparent" }}>
                        {!chatId && (
                            <Bubble
                                text="This is a new Chat.Say hi!"
                                type="system"
                            />
                        )}
                    </PageContainer>
                </ImageBackground>

                <View style={styles.inputContainer}>
                    <TouchableOpacity
                        style={styles.mediaButton}
                        onPress={() => console.log("Pressed!")}
                    >
                        <Feather name="plus" size={24} color={colors.blue} />
                    </TouchableOpacity>
                    <TextInput
                        value={messageText}
                        style={styles.textarea}
                        onChangeText={(text) => setMessageText(text)}
                        onSubmitEditing={sendMessage}
                    />
                    {messageText === "" ? (
                        <TouchableOpacity
                            style={styles.mediaButton}
                            onPress={() => console.log("Pressed!")}
                        >
                            <Feather
                                name="camera"
                                size={24}
                                color={colors.blue}
                            />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            style={{
                                ...styles.mediaButton,
                                ...styles.sendButton,
                            }}
                            onPress={sendMessage}
                        >
                            <Feather name="send" size={20} color="white" />
                        </TouchableOpacity>
                    )}
                </View>
            </KeyboardAvoidingView>
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
    sendButton: {
        backgroundColor: colors.blue,
        borderRadius: 40,
        padding: 8,
    },
});
