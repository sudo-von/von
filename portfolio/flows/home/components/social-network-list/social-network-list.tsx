import { FC } from "react";
import SocialNetwork, {
  SocialNetworkProps,
} from "../social-network/social-network";

export type SocialNetworkListProps = {
  socialNetworks: SocialNetworkProps[];
};

const SocialNewtorkList: FC<SocialNetworkListProps> = ({ socialNetworks }) => {
  return (
    <div className="flex flex-row gap-6 mb-56 lg:mb-96">
      {socialNetworks.map(({ alt, src, href }) => (
        <div
          key={src}
          className="relative w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10"
        >
          <SocialNetwork alt={alt} href={href} src={src} />
        </div>
      ))}
    </div>
  );
};

export default SocialNewtorkList;
