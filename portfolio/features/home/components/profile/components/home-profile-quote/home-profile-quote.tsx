import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../../components/typography/typography";

const HomeProfileQuote: FC<PropsWithChildren> = ({ children }) => {
  const formattedQuote = `“${children}”`;
  return (
    <Typography color="slate" weight="light" whitespace="pre">
      {formattedQuote}
    </Typography>
  );
};

export default HomeProfileQuote;
