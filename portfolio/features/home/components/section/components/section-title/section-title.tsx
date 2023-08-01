import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../../components/typography/typography";

const SectionTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="black"
      component="h1"
      variant="title"
      weight="bold"
      whitespace="pre"
    >
      {children}
    </Typography>
  );
};

export default SectionTitle;
