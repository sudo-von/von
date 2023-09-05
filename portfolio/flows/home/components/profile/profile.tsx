import { FC } from "react";
import Name from "@home/components/profile/components/name/name";
import Details, { DetailsProps } from "@home/components/profile/components/details/details";
import { SocialNetworkProps } from "@home/components/profile/components/social-network/social-network";
import SocialNewtorkList from "@home/components/profile/components/social-network-list/social-network-list";

export type ProfileProps = {
  details?: DetailsProps;
  name: string;
  socialNetworks: SocialNetworkProps[];
};

const Profile: FC<ProfileProps> = ({ details, name, socialNetworks = [] }) => {
  return (
    <div className="grid grid-col text-center lg:text-start gap-6">
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
