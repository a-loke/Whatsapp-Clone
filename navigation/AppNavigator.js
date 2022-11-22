import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainNavigator from "./MainNavigator";
import AuthenticationScreen from "../screens/AuthenticationScreen";

export default function AppNavigator() {
    const isAuth = false;
    return (
        <NavigationContainer>
            {isAuth && <MainNavigator />}
            {!isAuth && <AuthenticationScreen />}
        </NavigationContainer>
    );
}
