import { FC } from "react";
import Typography from "../../../../components/typography/typography";

type AuthBannerProps = {
  title: string;
  description: string;
};

const AuthBanner: FC<AuthBannerProps> = ({ title, description }) => {
  return (
    <div>
      <Typography align="center" variant="title">
        {title}
      </Typography>
      <Typography align="center" color="slate" weight="light">
        {description}
      </Typography>
    </div>
  );
};

export default AuthBanner;
