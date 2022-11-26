import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { useSelector } from "react-redux";

const ChatListScreen = (props) => {
    const selectedUser = props.route?.params?.selectedUserId;
    const userData = useSelector((state) => state.auth.userData);
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item
                            title="New Chat"
                            iconName="create-outline"
                            onPress={() => navigation.navigate("NewChat")}
                        />
                    </HeaderButtons>
                );
            },
        });
    }, [navigation]);

    useEffect(() => {
        if (!selectedUser) {
            return;
        }
        const chatUsers = [selectedUser, userData.userId];
        navigation.navigate("ChatScreen", { users: chatUsers });
    }, [selectedUser]);
    return (
        <View>
            <Button
                title="Go to Chat screen"
                onPress={() => navigation.navigate("ChatScreen")}
            />
        </View>
    );
};

export default ChatListScreen;

const styles = StyleSheet.create({});
