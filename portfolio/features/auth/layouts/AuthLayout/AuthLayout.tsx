import { FC, PropsWithChildren } from "react";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col gap-5 w-full sm:w-full md:w-8/12 lg:w-4/12 xl:w-3/12">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;