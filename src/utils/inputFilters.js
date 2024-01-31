export const validateUserName = (username, setErrorField, setErrorText) => {
  if (username.length < 3) {
    setErrorText("User name must be at least 3 characters");
    setErrorField("username");
  } else if (username.length > 20) {
    setErrorText("User name must be at most 20 characters");
    setErrorField("username");
  } else {
    setErrorText(null);
    setErrorField(null);
    return true;
  }
  return false;
};

export const validateEmail = (email, setErrorField, setErrorText) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    setErrorText("Enter a valid email address");
    setErrorField("email");
  } else {
    setErrorText(null);
    setErrorField(null);
    return true;
  }
  return false;
};

export const validateSignUpPassword = (password, setErrorField, setErrorText) => {
  if (password.length < 8) {
    setErrorText("Password must be at least 8 characters");
    setErrorField("password");
  } else if (password.length > 20) {
    setErrorText("Password must be at most 20 characters");
    setErrorField("password");
  } else {
    setErrorText(null);
    setErrorField(null);
    return true;
  }
  return false;
};

export const validateLoginPassword = (password, setErrorField, setErrorText) => {
  if (password.length <= 0) {
    setErrorText("Enter a password");
    setErrorField("password");
  } else {
    setErrorText(null);
    setErrorField(null);
    return true;
  }
  return false;
};
