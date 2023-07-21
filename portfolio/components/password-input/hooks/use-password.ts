import { useState } from "react";

const usePassword = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => setIsVisible((visibility) => !visibility);

  return {
    isVisible,
    handleVisibility,
  };
};

export default usePassword;