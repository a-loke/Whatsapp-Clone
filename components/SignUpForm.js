import React, { useCallback, useReducer } from "react";
import { Feather } from "@expo/vector-icons";

import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { validateInput } from "../utils/actions/formAction";
import { reducer } from "../utils/reducers/formReducer";
import { signUp } from "../utils/actions/authAction";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGcHwNQFZH_7mWZvOh48PAv9GG6dxvXO0",
    authDomain: "whatsapp-a2775.firebaseapp.com",
    projectId: "whatsapp-a2775",
    storageBucket: "whatsapp-a2775.appspot.com",
    messagingSenderId: "95046659039",
    appId: "1:95046659039:web:5e76a96cac961866a6b26a",
    measurementId: "G-4FBB1PFEW7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log(app);
const initialState = {
    inputValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    },
    inputValidities: {
        firstName: false,
        lastName: false,
        email: false,
        password: false,
    },
    formIsValid: false,
};

const SignUpForm = () => {
    const [formState, dispatchFormState] = useReducer(reducer, initialState);

    const onChangedInput = useCallback(
        (inputId, inputValue) => {
            const validationResult = validateInput(inputId, inputValue);
            dispatchFormState({
                inputId,
                validationResult,
                inputValue,
            });
        },
        [dispatchFormState]
    );

    const handleAuth = () => {
        console.log(formState.inputValues.firstName);
        signUp(
            formState.inputValues.firstName,
            formState.inputValues.lastName,
            formState.inputValues.email,
            formState.inputValues.password
        );
    };
    return (
        <>
            <Input
                id="firstName"
                label="First name"
                icon="user"
                pack={Feather}
                size={20}
                onChangedInput={onChangedInput}
                autoCapitalize="none"
                errorText={formState.inputValidities["firstName"]}
            />
            <Input
                id="lastName"
                label="Last name"
                icon="user"
                pack={Feather}
                size={20}
                onChangedInput={onChangedInput}
                autoCapitalize="none"
                errorText={formState.inputValidities["lastName"]}
            />
            <Input
                id="email"
                label="Email"
                icon="mail"
                pack={Feather}
                size={20}
                onChangedInput={onChangedInput}
                autoCapitalize="none"
                keyboardType="email-address"
                errorText={formState.inputValidities["email"]}
            />
            <Input
                id="password"
                label="Password"
                icon="lock"
                pack={Feather}
                size={20}
                onChangedInput={onChangedInput}
                autoCapitalize="none"
                secureTextEntry
                errorText={formState.inputValidities["password"]}
            />
            <SubmitButton
                title="Sign up"
                onPress={handleAuth}
                style={{ marginTop: 20 }}
                disabled={!formState.formIsValid}
            />
        </>
    );
};

export default SignUpForm;
