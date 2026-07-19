export const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  country: "",
  interests: [],
};

export const STEP_1_ERROR_STATE = {
  name: "",
  email: "",
};

export const STEP_2_ERROR_STATE = {
  country: false,
  interests: false,
};

export const INTERESTS_LIST = ["Sports", "Music", "Coding", "Reading"];
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
