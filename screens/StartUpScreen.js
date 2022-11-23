import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import commonStyles from "../constants/commonStyles";
import colors from "../constants/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setDidTryAutoLogin } from "../store/authSlice";

const StartUpScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchUserData = async () => {
            const storedData = await AsyncStorage.getItem("userData");

            if (!storedData) {
                dispatch(setDidTryAutoLogin());
                return;
            }
        };
        fetchUserData();
    }, []);
    return (
        <View style={commonStyles.center}>
            <ActivityIndicator size={"large"} color={colors.primary} />
        </View>
    );
};

export default StartUpScreen;
