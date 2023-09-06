import { FC, PropsWithChildren } from "react";

const ContainerLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col items-center mt-48">
      <main className="flex flex-col w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
        {children}
      </main>
    </div>
  );
};

export default ContainerLayout;
