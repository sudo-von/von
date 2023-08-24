import { AlertVariants } from "./alert.types";
import { AiOutlineCheck, AiFillCloseCircle } from "react-icons/ai";

export const alertVariants: AlertVariants = {
  error: {
    color: "error",
    icon: AiFillCloseCircle,
  },
  success: {
    color: "success",
    icon: AiOutlineCheck,
  },
};
