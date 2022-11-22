import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ChatListScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Button
                title="Go to settings"
                onPress={() => navigation.navigate("ChatSettings")}
            />
        </View>
    );
};

export default ChatListScreen;

const styles = StyleSheet.create({});
