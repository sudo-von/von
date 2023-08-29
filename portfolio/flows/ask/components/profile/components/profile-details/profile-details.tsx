import { FC, ReactNode } from "react";
import ProfileInterest from "../profile-interest/profile-interest";
import ProfilePosition from "../profile-position/profile-position";

export type ProfileDetailsProps = {
  position: ReactNode;
  interest: ReactNode;
};

const ProfileDetails: FC<ProfileDetailsProps> = ({ interest, position }) => {
  return (
    <>
      <ProfilePosition>{position}</ProfilePosition>
      <ProfileInterest>{interest}</ProfileInterest>
    </>
  );
};

export default ProfileDetails;
