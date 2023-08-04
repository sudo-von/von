import { FC } from "react";
import Typography, { TypographyProps } from "../typography/typography";

type LegendProps = Partial<Pick<TypographyProps, "color">> &
  Pick<TypographyProps, "children">;

const Legend: FC<LegendProps> = ({ color = "slate", children }) => {
  return (
    <Typography
      color={color}
      component="small"
      spacing="wide"
      variant="legend"
      weight="light"
      whitespace="pre"
    >
      {children}
    </Typography>
  );
};

export default Legend;
