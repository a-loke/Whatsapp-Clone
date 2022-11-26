import {
    Button,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { FontAwesome } from "@expo/vector-icons";

import CustomHeaderButton from "../components/CustomHeaderButton";
import PageContainer from "../components/PageContainer";
import colors from "../constants/colors";
import commonStyles from "../constants/commonStyles";
import { searchUser } from "../utils/actions/userAction";
import DataItem from "../components/DataItem";
import { useDispatch, useSelector } from "react-redux";
import { setStoredUsers } from "../store/userSlice";

const NewChatScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState();
    const [noUsersFound, setNoUsersFound] = useState(false);
    const [searchedUser, setSearchedUser] = useState("");
    const userData = useSelector((state) => state.auth.userData);

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

    useEffect(() => {
        const delayedSearch = setTimeout(async () => {
            if (!searchedUser || searchedUser === "") {
                setUsers();
                setNoUsersFound(false);
                return;
            }
            setIsLoading(true);
            const searchResult = await searchUser(searchedUser);
            delete searchResult[userData.userId];
            setUsers(searchResult);

            if (Object.keys(searchResult).length === 0) {
                setNoUsersFound(true);
            } else {
                setNoUsersFound(false);
            }
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(delayedSearch);
    }, [searchedUser]);

    const userPressed = (userId) => {
        dispatch(setStoredUsers({ [userId]: users[userId] }));
        navigation.navigate("ChatList", { selectedUserId: userId });
    };

    return (
        <PageContainer>
            <View style={styles.searchContainer}>
                <FontAwesome name="search" size={15} color={colors.lightGrey} />
                <TextInput
                    style={styles.searchBox}
                    placeholder="Search"
                    onChangeText={(text) => setSearchedUser(text)}
                />
            </View>
            {!isLoading && !noUsersFound && users && (
                <FlatList
                    data={Object.keys(users)}
                    renderItem={(itemData) => {
                        const userId = itemData.item;
                        const userData = users[userId];
                        return (
                            <DataItem
                                title={`${userData.firstName} ${userData.lastName}`}
                                subtitle={userData.about}
                                image={userData.profilePicture}
                                onPress={() => userPressed(userId)}
                            />
                        );
                    }}
                />
            )}
            {!isLoading && !users && (
                <View style={commonStyles.center}>
                    <FontAwesome
                        name="users"
                        size={55}
                        color={colors.lightGrey}
                        style={styles.centerIcon}
                    />
                    <Text style={styles.centerText}>Search for a user.</Text>
                </View>
            )}
            {!isLoading && noUsersFound && (
                <View style={commonStyles.center}>
                    <FontAwesome
                        name="exclamation-circle"
                        size={55}
                        color={colors.lightGrey}
                        style={styles.centerIcon}
                    />
                    <Text style={styles.centerText}>No user found.</Text>
                </View>
            )}
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
    centerIcon: {
        top: -10,
    },
    centerText: {
        color: colors.textColor,
        fontFamily: "regular",
        letterSpacing: 0.3,
    },
});
