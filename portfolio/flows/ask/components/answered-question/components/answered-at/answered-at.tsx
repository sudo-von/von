import { FC } from "react";
import Typography from "../../../../../common/components/typography/typography";

export type AnsweredAtProps = {
  answeredAt: string;
};

const AnsweredAt: FC<AnsweredAtProps> = ({ answeredAt }) => {
  return (
    <Typography
      color="normal"
      component="small"
      size="tiny"
      spacing="normal"
      weight="light"
      whitespace="normal"
    >
      {answeredAt}
    </Typography>
  );
};

export default AnsweredAt;
