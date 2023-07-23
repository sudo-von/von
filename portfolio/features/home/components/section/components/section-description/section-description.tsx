import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../../components/typography/typography";

const SectionDescription: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography color="slate" weight="light" whitespace="pre">
      {children}
    </Typography>
  );
};

export default SectionDescription;
