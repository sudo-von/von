import { FC } from "react";
import Name from "./components/name/name";
import Details, { DetailsProps } from "./components/details/details";
import SocialNewtorkList from "../social-network-list/social-network-list";
import { SocialNetworkProps } from "../social-network/social-network";

export type UserProps = {
  details: DetailsProps | null;
  name: string;
  socialNetworks: SocialNetworkProps[];
};

const User: FC<UserProps> = ({ details, name, socialNetworks = [] }) => {
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

export default User;
