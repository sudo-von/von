import { FC } from "react";
import Banner from "../../../common/components/banner/banner";
import Section from "../section/section";

type ProfileProps = {
  name: string;
  quote: string;
  interest: string;
  position: string;
};

const Profile: FC<ProfileProps> = ({ name, quote, interest, position }) => {
  return (
    <>
      <Banner>{name}</Banner>
      <Section title={position} subtitle={interest} description={quote} />
    </>
  );
};

export default Profile;
