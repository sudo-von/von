import { FC, PropsWithChildren } from "react";

const QuestionsLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-row justify-center mt-24 sm:mt-28 md:mt-32">
      <div className="flex flex-col w-full sm:w-full md:max-w-lg lg:max-w-xl xl:max-w-2xl gap-5">
        {children}
      </div>
    </div>
  );
};

export default QuestionsLayout;
