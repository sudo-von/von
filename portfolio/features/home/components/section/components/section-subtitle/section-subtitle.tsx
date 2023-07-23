import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../../components/typography/typography";

const SectionSubtitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography variant="subtitle" weight="light" whitespace="pre">
      {children}
    </Typography>
  );
};

export default SectionSubtitle;