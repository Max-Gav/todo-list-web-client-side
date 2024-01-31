import { useState } from "react";
import SignUpDialog from "../components/Sign Up Dialog/SignUpDialog";
import LoginDialog from "../components/Login Dialog/LoginDialog";

const useDialog = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const [currentDialog, setCurrentDialog] = useState(null);
  
    const openSignUpDialog = () => {
      setCurrentDialog("signup");
      setIsOpen(true);
    };
  
    const openLoginDialog = () => {
      setCurrentDialog("login");
      setIsOpen(true);
    };
  
    const handleClose = () => {
      setIsOpen(false);
      setCurrentDialog(null);
    };

    return {isOpen, currentDialog, openSignUpDialog, openLoginDialog, handleClose}
}

export default useDialog