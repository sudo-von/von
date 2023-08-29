import { FC } from "react";
import { formatAnsweredAt } from "./answered-at.utils";
import Typography from "../../../common/components/typography/typography";

type AnsweredAtProps = {
  answeredAt: Date;
};

const AnsweredAt: FC<AnsweredAtProps> = ({ answeredAt }) => {
  const formatedAskedAt = formatAnsweredAt(answeredAt);
  return (
    <Typography
      color="normal"
      component="small"
      size="tiny"
      spacing="normal"
      weight="light"
      whitespace="normal"
    >
      {formatedAskedAt}
    </Typography>
  );
};

export default AnsweredAt;
