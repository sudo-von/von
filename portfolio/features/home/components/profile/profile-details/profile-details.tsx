import { FC } from "react";
import Section from "../../section/section";

export type ProfileDetailsProps = {
  quote: string;
  interest: string;
  position: string;
};

const ProfileDetails: FC<ProfileDetailsProps> = ({
  quote,
  interest,
  position,
}) => {
  return <Section title={position} subtitle={interest} description={quote} />;
};

export default ProfileDetails;
