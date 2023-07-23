import { FC } from "react";
import ProfileName from "./components/home-profile-name/home-profile-name";
import ProfileQuote from "./components/home-profile-quote/home-profile-quote";
import ProfileInterest from "./components/home-profile-interest/home-profile-interest";
import ProfilePosition from "./components/home-profile-position/home-profile-position";

type ProfileProps = {
  name: string;
  quote: string;
  interest: string;
  position: string;
};

const Profile: FC<ProfileProps> = ({ name, quote, interest, position }) => {
  return (
    <div className="flex flex-col text-center lg:text-start gap-8">
      <ProfileName>{name}</ProfileName>
      <ProfilePosition>{position}</ProfilePosition>
      <ProfileInterest>{interest}</ProfileInterest>
      <ProfileQuote>{quote}</ProfileQuote>
    </div>
  );
};

export default Profile;
