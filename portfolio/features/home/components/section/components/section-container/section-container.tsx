import { FC, PropsWithChildren } from "react";

const SectionContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 mt-72 sm:mt-80 md:mt-96 gap-8">
      {children}
    </section>
  );
};

export default SectionContainer;
