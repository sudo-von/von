import { Lexend } from "next/font/google";
import { FC, PropsWithChildren } from "react";

const font = Lexend({ subsets: ["latin"] });

const FontLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className={font.className}>{children}</div>;
};

export default FontLayout;
