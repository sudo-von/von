import { useRef } from "react";

const useSaturation = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  const handleOnMouseEnter = () => {
    if (ref.current) {
      ref.current.classList.remove("saturate-0");
    }
  };

  return {
    ref,
    handleOnMouseEnter,
  };
};

export default useSaturation;
