import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../../components/typography/typography";

const ProfileQuote: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="slate"
      component="small"
      variant="paragraph"
      whitespace="pre"
      weight="light"
    >
      “{children}”
    </Typography>
  );
};

export default ProfileQuote;
