import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ChatListScreen from "../screens/ChatListScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ChatSettingScreen from "../screens/ChatSettingScreen";
import ChatScreen from "../screens/ChatScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerTitle: "",
            }}
        >
            <Tab.Screen
                name="ChatList"
                component={ChatListScreen}
                options={{
                    tabBarLabel: "Chats",
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons
                            name="chatbubble-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: "Settings",
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons
                            name="settings-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default function () {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={TabNavigator}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="ChatScreen"
                component={ChatScreen}
                options={{
                    headerTitle: "",
                    headerBackTitle: "Back",
                }}
            />
            <Stack.Screen
                name="ChatSettings"
                component={ChatSettingScreen}
                options={{
                    headerTitle: "Settings",
                    headerBackTitle: "Back",
                }}
            />
        </Stack.Navigator>
    );
}
