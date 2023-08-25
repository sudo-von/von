import { FC, PropsWithChildren } from "react";
import Banner from "../../../../../common/components/banner/banner";

const ProfileName: FC<PropsWithChildren> = ({ children }) => {
  return <Banner>{children}</Banner>;
};

export default ProfileName;
