import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PageContainer from "../components/PageContainer";
import Input from "../components/Input";

const AuthenticationScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                <Input label="first name" />
            </PageContainer>
        </SafeAreaView>
    );
};

export default AuthenticationScreen;

const styles = StyleSheet.create({});
