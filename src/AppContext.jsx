import React, { createContext } from "react";
import useConnected from "./hooks/useConnected";
import App from "./App";
import useDialog from "./hooks/useDialog";

export const IsConnectedContext = createContext(null);
export const DialogContext = createContext(null);

const AppContext = () => {
  // Is Logged In
  const { isConnected, connectUser, disconnectUser  } = useConnected();

  // Dialog
  const {
    isOpen,
    currentDialog,
    openSignUpDialog,
    openLoginDialog,
    handleClose,
  } = useDialog();

  return (
    <IsConnectedContext.Provider value={{ isConnected, connectUser, disconnectUser }}>
      <DialogContext.Provider
        value={{
          isOpen,
          currentDialog,
          openSignUpDialog,
          openLoginDialog,
          handleClose,
        }}
      >
        <App />
      </DialogContext.Provider>
    </IsConnectedContext.Provider>
  );
};

export default AppContext;
