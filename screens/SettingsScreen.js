import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useReducer, useState } from "react";
import PageTitle from "../components/PageTitle";
import PageContainer from "../components/PageContainer";
import Input from "../components/Input";
import { Feather } from "@expo/vector-icons";
import { validateInput } from "../utils/actions/formAction";
import { reducer } from "../utils/reducers/formReducer";
import { useDispatch, useSelector } from "react-redux";
import colors from "../constants/colors";
import SubmitButton from "../components/SubmitButton";
import {
    updateSignedInUserData,
    userLogout,
} from "../utils/actions/authAction";

const SettingsScreen = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const userData = useSelector((state) => state.auth.userData);

    const initialState = {
        inputValues: {
            firstName: userData.firstName || "",
            lastName: userData.lastName || "",
            email: userData.email || "",
            about: userData.about || "",
        },
        inputValidities: {
            firstName: undefined,
            lastName: undefined,
            email: undefined,
            about: undefined,
        },
        formIsValid: false,
    };
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

    const handleSave = async () => {
        const updatedUserData = formState.inputValues;
        try {
            setIsLoading(true);
            await updateSignedInUserData(userData.userId, updatedUserData);
            Alert.alert("Success!", "Data has been updated.");
        } catch (error) {
            Alert.alert("An error occurred!", "Unable to update data");
        } finally {
            setIsLoading(false);
        }
    };
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
                initialValue={userData.firstName}
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
                initialValue={userData.lastName}
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
                initialValue={userData.email}
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
                initialValue={userData.about}
            />
            {isLoading ? (
                <ActivityIndicator
                    size={"small"}
                    color={colors.primary}
                    style={{ marginTop: 25 }}
                />
            ) : (
                <SubmitButton
                    title="Save"
                    onPress={handleSave}
                    style={{ marginTop: 20 }}
                    disabled={!formState.formIsValid}
                />
            )}
            <SubmitButton
                title="Logout"
                onPress={() => dispatch(userLogout())}
                style={{ marginTop: 20 }}
                color={colors.red}
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
