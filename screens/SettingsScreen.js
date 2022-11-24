import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useReducer } from "react";
import PageTitle from "../components/PageTitle";
import PageContainer from "../components/PageContainer";
import Input from "../components/Input";
import { Feather } from "@expo/vector-icons";
import { validateInput } from "../utils/actions/formAction";
import { reducer } from "../utils/reducers/formReducer";

const initialState = {
    inputValues: {
        firstName: "",
        lastName: "",
        email: "",
        about: "",
    },
    inputValidities: {
        firstName: false,
        lastName: false,
        email: false,
        about: false,
    },
    formIsValid: false,
};

const SettingsScreen = () => {
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
    return (
        <PageContainer>
            <PageTitle text="Settings" />
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
                id="about"
                label="About"
                icon="info"
                pack={Feather}
                size={20}
                onChangedInput={onChangedInput}
                autoCapitalize="none"
                errorText={formState.inputValidities["about"]}
            />
        </PageContainer>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
