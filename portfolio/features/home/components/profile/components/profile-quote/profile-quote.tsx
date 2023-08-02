import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../../components/typography/typography";

const ProfileQuote: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="slate"
      component="small"
      variant="paragraph"
      weight="light"
      whitespace="pre"
    >
      “{children}”
    </Typography>
  );
};

export default ProfileQuote;
