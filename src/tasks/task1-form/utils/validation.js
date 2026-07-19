import { EMAIL_REGEX } from "./constants";

const validateEmptyField = (value) => {
  return !value || !value.trim();
};

export const validateName = (name) => {
  if (validateEmptyField(name)) {
    return "Please enter your name";
  }
  return "";
};

export const validateEmail = (email) => {
  if (validateEmptyField(email)) {
    return "Email is required";
  }
  if (!EMAIL_REGEX.test(email)) {
    return "Please enter a valid email address";
  }
  return "";
};

export const validateCountry = (country) => {
  return validateEmptyField(country);
};

export const validateInterests = (interestsArray) => {
  return !interestsArray || interestsArray.length === 0;
};
