import React, { useCallback, useEffect, useReducer, useState } from "react";
import { Feather } from "@expo/vector-icons";

import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { validateInput } from "../utils/actions/formAction";
import { reducer } from "../utils/reducers/formReducer";
import { signUp } from "../utils/actions/authAction";
import { ActivityIndicator, Alert } from "react-native";
import colors from "../constants/colors";

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
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [formState, dispatchFormState] = useReducer(reducer, initialState);

    useEffect(() => {
        if (error) {
            Alert.alert("An error occurred", error);
        }
    }, [error]);
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

    const handleAuth = async () => {
        try {
            setIsLoading(true);
            await signUp(
                formState.inputValues.firstName,
                formState.inputValues.lastName,
                formState.inputValues.email,
                formState.inputValues.password
            );
            setError(null);
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
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
            {isLoading ? (
                <ActivityIndicator
                    size={"small"}
                    color={colors.primary}
                    style={{ marginTop: 25 }}
                />
            ) : (
                <SubmitButton
                    title="Sign up"
                    onPress={handleAuth}
                    style={{ marginTop: 20 }}
                    disabled={!formState.formIsValid}
                />
            )}
        </>
    );
};

export default SignUpForm;
