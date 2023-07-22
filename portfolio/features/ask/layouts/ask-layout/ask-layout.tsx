import { FC, PropsWithChildren } from "react";

const AskLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-row justify-center mt-24 sm:mt-28 md:mt-32">
      <div className="flex flex-col gap-5 w-full sm:w-full md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        {children}
      </div>
    </div>
  );
};

export default AskLayout;
