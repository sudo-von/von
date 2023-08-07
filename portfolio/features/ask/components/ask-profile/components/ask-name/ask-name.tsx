import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../common/components/typography/typography";
import Title from "../../../../../common/components/title/title";
import Banner from "../../../../../common/components/banner/banner";

const AskName: FC<PropsWithChildren> = ({ children }) => {
  return <Banner>{children}</Banner>;
};

export default AskName;
