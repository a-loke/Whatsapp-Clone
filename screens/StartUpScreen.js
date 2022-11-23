import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import commonStyles from "../constants/commonStyles";
import colors from "../constants/colors";

const StartUpScreen = () => {
    return (
        <View style={commonStyles.center}>
            <ActivityIndicator size={"large"} color={colors.primary} />
        </View>
    );
};

export default StartUpScreen;
