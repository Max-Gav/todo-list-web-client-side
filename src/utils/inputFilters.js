export const validateUserName = (username) => {
  if (username.length < 3) {
    return {errorField: "username", errorText: "User name must be at least 3 characters"}
  } else if (username.length > 20) {
    return {errorField: "username", errorText: "User name must be at most 20 characters"}
  } else {
    return {errorField: null, errorText: null}
  }
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return {errorField: "email", errorText: "Enter a valid email address"}
  } else {
    return {errorField: null, errorText: null}
  }
};

export const validateSignUpPassword = (
  password,
) => {
  if (password.length < 8) {
    return {errorField: "password", errorText: "Password must be at least 8 characters"}
  } else if (password.length > 20) {
    return {errorField: "password", errorText: "Password must be at most 20 characters"}
  } else {
    return {errorField: null, errorText: null}
  }
};

export const validateLoginPassword = (
  password,
) => {
  if (password.length <= 0) {
    return {errorField: "password", errorText: "Enter a password"}
  } else {
    return {errorField: null, errorText: null}
  }
};

export const validateTaskMessage = (message) => {
  if (message.length <= 0) {
    return {errorField: "message", errorText: "Task message should not be empty"}
  } else if (message.length > 50) {
    return {errorField: "message", errorText: "Task message must be at most 50 characters"}
  } else {
    return {errorField: null, errorText: null}
  }
};


// Sets the error field and error text states and returns true if a error occurred
export const setErrorDetails = (errorDetails,setErrorField, setErrorText)=>{
  setErrorField(errorDetails.errorField)
  setErrorText(errorDetails.errorText)

  return errorDetails.errorField != null
}
