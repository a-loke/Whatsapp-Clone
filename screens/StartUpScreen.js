import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import commonStyles from "../constants/commonStyles";
import colors from "../constants/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { authenticate, setDidTryAutoLogin } from "../store/authSlice";
import { getUserData } from "../utils/actions/userAction";

const StartUpScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchUserData = async () => {
            const storedData = await AsyncStorage.getItem("userData");

            if (!storedData) {
                dispatch(setDidTryAutoLogin());
                return;
            }

            const parsedData = JSON.parse(storedData);
            const { token, userId, expiryDate: expiryDateString } = parsedData;
            const expiryDate = new Date(expiryDateString);
            if (expiryDate <= new Date() || !token || !userId) {
                dispatch(setDidTryAutoLogin());
                return;
            }

            const userData = await getUserData(userId);
            dispatch(authenticate({ token: token, userData }));
        };
        fetchUserData();
    }, [dispatch]);
    return (
        <View style={commonStyles.center}>
            <ActivityIndicator size={"large"} color={colors.primary} />
        </View>
    );
};

export default StartUpScreen;
