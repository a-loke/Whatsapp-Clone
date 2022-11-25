import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const ChatListScreen = () => {
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
