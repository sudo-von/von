import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../../components/typography/typography";

const SectionTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography component="h1" variant="title" whitespace="pre">
      {children}
    </Typography>
  );
};

export default SectionTitle;
