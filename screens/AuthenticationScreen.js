import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PageContainer from "../components/PageContainer";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";
import colors from "../constants/colors";
import logo from "../assets/images/logo.png";

const AuthenticationScreen = () => {
    const [isSignedUp, setisSignedUp] = useState(false);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <KeyboardAvoidingView
                    style={{ flex: 1, justifyContent: "center" }}
                    behavior={Platform.OS === "ios" ? "height" : undefined}
                    keyboardVerticalOffset={100}
                >
                    <PageContainer>
                        <View style={styles.imageContainer}>
                            <Image
                                style={{ width: "50%" }}
                                source={logo}
                                resizeMode="contain"
                            />
                        </View>
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
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AuthenticationScreen;

const styles = StyleSheet.create({
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
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
