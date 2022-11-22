import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PageContainer from "../components/PageContainer";

const AuthenticationScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                <Text>AuthenticationScreen</Text>
            </PageContainer>
        </SafeAreaView>
    );
};

export default AuthenticationScreen;

const styles = StyleSheet.create({});
