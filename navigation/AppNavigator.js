import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainNavigator from "./MainNavigator";
import AuthenticationScreen from "../screens/AuthenticationScreen";
import { useSelector } from "react-redux";

export default function AppNavigator() {
    const isAuth = useSelector(
        (state) => state.auth.token !== null && state.auth.token !== ""
    );
    return (
        <NavigationContainer>
            {isAuth && <MainNavigator />}
            {!isAuth && <AuthenticationScreen />}
        </NavigationContainer>
    );
}
