import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../../components/typography/typography";

const SectionTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography variant="title" weight="bold" whitespace="pre">
      {children}
    </Typography>
  );
};

export default SectionTitle;
