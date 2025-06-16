import { useState } from "react";

const useOverlay = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const [props, setProps] = useState(undefined)
    const [currentOverlay, setCurrentOverlay] = useState(null);
  
    const openOverlay = (overlayName, overlayProps = undefined) => {
      setCurrentOverlay(overlayName);
      setProps(overlayProps)
      setIsOpen(true);
    };
  
    const handleClose = () => {
      setIsOpen(false);
      setCurrentOverlay(null);
    };

    return {isOpen, props, currentOverlay, openOverlay, handleClose}
}

export default useOverlay