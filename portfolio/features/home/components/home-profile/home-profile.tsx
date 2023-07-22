import React, { FC } from "react";
import HomeProfileName from "./components/home-profile-name/home-profile-name";
import HomeProfileQuote from "./components/home-profile-quote/home-profile-quote";
import HomeProfileInterest from "./components/home-profile-interest/home-profile-interest";
import HomeProfilePosition from "./components/home-profile-position/home-profile-position";

type HomeProfileProps = {
  name: string;
  quote: string;
  interest: string;
  position: string;
};

const HomeProfile: FC<HomeProfileProps> = ({
  name,
  quote,
  interest,
  position,
}) => {
  return (
    <>
      <HomeProfileName>{name}</HomeProfileName>
      <HomeProfilePosition>{position}</HomeProfilePosition>
      <HomeProfileInterest>{interest}</HomeProfileInterest>
      <HomeProfileQuote>{quote}</HomeProfileQuote>
    </>
  );
};

export default HomeProfile;
