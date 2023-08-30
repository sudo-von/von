import { FC, ReactNode } from "react";
import Name from "./components/name/name";
import Details, { DetailsProps } from "./components/details/details";

export type ProfileProps = {
  details: DetailsProps | null;
  name: ReactNode;
};

const Profile: FC<ProfileProps> = ({ name, details }) => {
  return (
    <div className="grid gap-6 mb-56 lg:mb-96 text-center lg:text-start">
      <Name>{name}</Name>
      {details && (
        <Details
          quote={details.quote}
          interest={details.interest}
          position={details.position}
        />
      )}
    </div>
  );
};

export default Profile;
