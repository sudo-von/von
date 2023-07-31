import { FC } from "react";
import ProfileName from "./components/profile-name/profile-name";
import ProfileQuote from "./components/profile-quote/profile-quote";
import ProfileInterest from "./components/profile-interest/profile-interest";
import ProfilePosition from "./components/profile-position/profile-position";

type ProfileProps = {
  name: string;
  quote: string;
  interest: string;
  position: string;
};

const Profile: FC<ProfileProps> = ({ name, quote, interest, position }) => {
  return (
    <>
      <ProfileName>{name}</ProfileName>
      <ProfilePosition>{position}</ProfilePosition>
      <ProfileInterest>{interest}</ProfileInterest>
      <ProfileQuote>{quote}</ProfileQuote>
    </>
  );
};

export default Profile;
