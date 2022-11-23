import React, { useCallback, useReducer } from "react";
import Input from "../components/Input";
import { Feather } from "@expo/vector-icons";
import SubmitButton from "../components/SubmitButton";
import { validateInput } from "../utils/actions/formAction";
import { reducer } from "../utils/reducers/formReducer";
import { signIn } from "../utils/actions/authAction";

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
    const [formState, dispatchFormState] = useReducer(reducer, initialState);
    const onChangedInput = useCallback(
        (inputId, inputValue) => {
            const validationResult = validateInput(inputId, inputValue);
            dispatchFormState({ inputId, validationResult, inputValue });
        },
        [dispatchFormState]
    );

    const handleAuth = () => {
        signIn(formState.inputValues.email, formState.inputValues.password);
    };

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
            <SubmitButton
                title="Sign In"
                onPress={handleAuth}
                style={{ marginTop: 20 }}
                disabled={!formState.formIsValid}
            />
        </>
    );
};

export default SignInForm;
