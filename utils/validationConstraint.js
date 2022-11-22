import { validate } from "validate.js";

export const validateString = (id, value) => {
    constraints = { presence: { allowEmpty: false } };
    if (value !== "") {
        constraints.format = {
            pattern: "[a-z]+",
            flags: "i",
            message: "can only contain alphabets",
        };
    }
    const validationResult = validate({ [id]: value }, { [id]: constraints });

    return validationResult && validationResult[id];
};

export const validateEmail = (id, value) => {
    constraints = { presence: { allowEmpty: false } };
    if (value !== "") {
        constraints.email = true;
    }
    const validationResult = validate({ [id]: value }, { [id]: constraints });

    return validationResult && validationResult[id];
};

export const validatePassword = (id, value) => {
    constraints = { presence: { allowEmpty: false } };
    if (value !== "") {
        constraints.length = {
            minimum: 6,
            message: "can't be less than 6 characters",
        };
    }
    const validationResult = validate({ [id]: value }, { [id]: constraints });

    return validationResult && validationResult[id];
};
