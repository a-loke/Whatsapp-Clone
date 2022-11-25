import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { FontAwesome } from "@expo/vector-icons";

import CustomHeaderButton from "../components/CustomHeaderButton";
import PageContainer from "../components/PageContainer";
import colors from "../constants/colors";

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
        <PageContainer>
            <View style={styles.searchContainer}>
                <FontAwesome name="search" size={15} color={colors.lightGrey} />
                <TextInput style={styles.searchBox} placeholder="Search" />
            </View>
        </PageContainer>
    );
};

export default NewChatScreen;

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.extraLightGrey,
        height: 30,
        marginVertical: 8,
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 5,
    },
    searchBox: {
        marginLeft: 8,
        fontSize: 15,
        width: "100%",
    },
});
