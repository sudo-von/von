import { FC } from "react";
import SocialNetwork, {
  SocialNetworkProps,
} from "../social-network/social-network";

export type SocialNetworkListProps = {
  socialNetworks: SocialNetworkProps[];
};

const SocialNewtorkList: FC<SocialNetworkListProps> = ({ socialNetworks }) => {
  return (
    <div className="flex flex-row justify-center lg:justify-start gap-6 mb-56 lg:mb-96">
      {socialNetworks.map(({ alt, href, src }) => (
        <div key={src} className="relative w-10 h-10">
          <SocialNetwork alt={alt} href={href} src={src} />
        </div>
      ))}
    </div>
  );
};

export default SocialNewtorkList;
