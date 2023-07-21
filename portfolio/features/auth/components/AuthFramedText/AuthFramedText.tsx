import { FC, PropsWithChildren } from "react";
import Typography from "../../../../components/typography/typography";

const AuthFramedText: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-1 border-t border-slate-400" />
      <Typography color="slate" weight="light">
        {children}
      </Typography>
      <div className="flex flex-1 border-t border-slate-400" />
    </div>
  );
};

export default AuthFramedText;
