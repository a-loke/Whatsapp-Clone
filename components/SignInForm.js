import React, { useCallback, useReducer } from "react";
import Input from "../components/Input";
import { Feather } from "@expo/vector-icons";
import SubmitButton from "../components/SubmitButton";
import { validateInput } from "../utils/actions/formAction";
import { reducer } from "../utils/reducers/formReducer";

const initialState = {
    inputValidities: {
        email: false,
        password: false,
    },
    formIsValid: false,
};

const SignInForm = () => {
    const [formState, dispatchFormState] = useReducer(reducer, initialState);
    const onChangedInput = useCallback(
        (inputId, inputValue) => {
            const result = validateInput(inputId, inputValue);
            dispatchFormState({ inputId, validationResult: result });
        },
        [dispatchFormState]
    );

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
            />
            <SubmitButton
                title="Sign In"
                onPress={() => {
                    console.log("Button Pressed");
                }}
                style={{ marginTop: 20 }}
                disabled={!formState.formIsValid}
            />
        </>
    );
};

export default SignInForm;
