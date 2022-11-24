import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PageTitle from "../components/PageTitle";
import PageContainer from "../components/PageContainer";
const SettingsScreen = () => {
    return (
        <PageContainer>
            <PageTitle text="Settings" />
        </PageContainer>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
