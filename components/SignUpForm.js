import React from "react";
import Input from "../components/Input";
import { Feather } from "@expo/vector-icons";
import SubmitButton from "../components/SubmitButton";

const SignUpForm = () => {
    return (
        <>
            <Input label="First name" icon="user" pack={Feather} size={20} />
            <Input label="Last name" icon="user" pack={Feather} size={20} />
            <Input label="Email" icon="mail" pack={Feather} size={20} />
            <Input label="Password" icon="lock" pack={Feather} size={20} />
            <SubmitButton
                title="Sign up"
                onPress={() => {
                    console.log("Button Pressed");
                }}
                style={{ marginTop: 20 }}
            />
        </>
    );
};

export default SignUpForm;
