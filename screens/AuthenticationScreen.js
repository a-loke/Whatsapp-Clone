import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PageContainer from "../components/PageContainer";
import Input from "../components/Input";
import { Feather } from "@expo/vector-icons";

const AuthenticationScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                <Input
                    label="First name"
                    icon="user"
                    pack={Feather}
                    size={20}
                />
                <Input label="Last name" icon="user" pack={Feather} size={20} />
                <Input label="Email" icon="mail" pack={Feather} size={20} />
                <Input label="Password" icon="lock" pack={Feather} size={20} />
            </PageContainer>
        </SafeAreaView>
    );
};

export default AuthenticationScreen;

const styles = StyleSheet.create({});
