import { FC, PropsWithChildren } from "react";
import Typography from "../typography/typography";
import { AiFillCloseCircle } from "react-icons/ai";

const Alert: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-row justify-center items-center gap-2">
      <AiFillCloseCircle className="text-red-150 text-2xl" />
      <Typography
        align="center"
        color="red"
        component="p"
        variant="paragraph"
        weight="light"
      >
        {children}
      </Typography>
    </div>
  );
};

export default Alert;
