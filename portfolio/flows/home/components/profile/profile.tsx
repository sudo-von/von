import { FC } from "react";
import Name from "./components/name/name";
import Details, { DetailsProps } from "./components/details/details";
import { SocialNetworkProps } from "./components/social-network/social-network";
import SocialNewtorkList from "./components/social-network-list/social-network-list";

export type ProfileProps = {
  details: DetailsProps | null;
  name: string;
  socialNetworks: SocialNetworkProps[];
};

const Profile: FC<ProfileProps> = ({ details, name, socialNetworks = [] }) => {
  return (
    <div className="grid gap-6 text-center lg:text-start">
      <Name>{name}</Name>
      {details && (
        <Details
          interest={details.interest}
          position={details.position}
          quote={details.quote}
        />
      )}
      <SocialNewtorkList socialNetworks={socialNetworks} />
    </div>
  );
};

export default Profile;
