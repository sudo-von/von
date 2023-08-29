import { FC } from "react";
import Typography from "../../../typography/typography";

type FooterCopyrightProps = {
  name: string;
  year: number;
};

const FooterCopyright: FC<FooterCopyrightProps> = ({ name, year }) => {
  return (
    <Typography
      color="neutral"
      component="p"
      size="normal"
      weight="light"
      whitespace="pre"
    >
      All rights reserved © {name} {year}.
    </Typography>
  );
};

export default FooterCopyright;
