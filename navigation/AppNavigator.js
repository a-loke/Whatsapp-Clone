import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainNavigator from "./MainNavigator";
import AuthenticationScreen from "../screens/AuthenticationScreen";
import { useSelector } from "react-redux";
import StartUpScreen from "../screens/StartUpScreen";

export default function AppNavigator() {
    const isAuth = useSelector(
        (state) => state.auth.token !== null && state.auth.token !== ""
    );
    const didTryAutoLogin = useSelector((state) => state.auth.didTryAutoLogin);
    return (
        <NavigationContainer>
            {isAuth && <MainNavigator />}
            {!isAuth && didTryAutoLogin && <AuthenticationScreen />}
            {!isAuth && !didTryAutoLogin && <StartUpScreen />}
        </NavigationContainer>
    );
}
