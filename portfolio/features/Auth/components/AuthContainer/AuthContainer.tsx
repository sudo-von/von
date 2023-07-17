import { FC, PropsWithChildren } from "react";

const AuthContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center gap-5 w-11/12 sm:w-10/12 md:w-8/12 lg:w-4/12 xl:w-3/12">
        {children}
      </div>
    </div>
  );
};

export default AuthContainer;
