import React, { useCallback, useEffect, useReducer, useState } from "react";
import Input from "../components/Input";
import { Feather } from "@expo/vector-icons";
import SubmitButton from "../components/SubmitButton";
import { validateInput } from "../utils/actions/formAction";
import { reducer } from "../utils/reducers/formReducer";
import { signIn } from "../utils/actions/authAction";
import { useDispatch } from "react-redux";
import { ActivityIndicator, Alert } from "react-native";
import colors from "../constants/colors";

const initialState = {
    inputValues: {
        email: "",
        password: "",
    },
    inputValidities: {
        email: false,
        password: false,
    },
    formIsValid: false,
};

const SignInForm = () => {
    const dispatch = useDispatch();
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
            dispatchFormState({ inputId, validationResult, inputValue });
        },
        [dispatchFormState]
    );

    const handleAuth = useCallback(async () => {
        try {
            setIsLoading(true);
            const action = signIn(
                formState.inputValues.email,
                formState.inputValues.password
            );
            setError(null);
            await dispatch(action);
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    }, [dispatch, formState]);

    return (
        <>
            <Input
                id="email"
                label="Email"
                icon="mail"
                pack={Feather}
                size={20}
                autoCapitalize="none"
                keyboardType="email-address"
                onChangedInput={onChangedInput}
                errorText={formState.inputValidities["email"]}
            />
            <Input
                id="password"
                label="Password"
                icon="lock"
                pack={Feather}
                size={20}
                autoCapitalize="none"
                secureTextEntry
                onChangedInput={onChangedInput}
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
                    title="Sign In"
                    onPress={handleAuth}
                    style={{ marginTop: 20 }}
                    disabled={!formState.formIsValid}
                />
            )}
        </>
    );
};

export default SignInForm;
