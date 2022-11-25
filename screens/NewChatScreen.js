import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const NewChatScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => {
                return (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item
                            title="Close"
                            onPress={() => navigation.goBack()}
                        />
                    </HeaderButtons>
                );
            },
        });
    }, [navigation]);
    return (
        <View>
            <Text>New Chat screen</Text>
        </View>
    );
};

export default NewChatScreen;

const styles = StyleSheet.create({});
