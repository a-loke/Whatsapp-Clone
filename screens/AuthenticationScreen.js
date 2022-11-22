import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PageContainer from "../components/PageContainer";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";
import colors from "../constants/colors";

const AuthenticationScreen = () => {
    const [isSignedUp, setisSignedUp] = useState(false);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                {isSignedUp ? <SignUpForm /> : <SignInForm />}
                <TouchableOpacity
                    style={styles.linkContainer}
                    onPress={() => {
                        setisSignedUp((prevState) => !prevState);
                    }}
                >
                    <Text style={styles.link}>{`Switch to ${
                        isSignedUp ? "Sign In" : "Sign Up"
                    }`}</Text>
                </TouchableOpacity>
            </PageContainer>
        </SafeAreaView>
    );
};

export default AuthenticationScreen;

const styles = StyleSheet.create({
    linkContainer: {
        marginVertical: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    link: {
        color: colors.blue,
        fontFamily: "medium",
        letterSpacing: 0.3,
    },
});
