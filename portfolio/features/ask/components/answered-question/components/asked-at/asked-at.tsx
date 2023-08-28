import { FC } from "react";
import { formatAskedAt } from "./asked-at.utils";
import Typography from "../../../../../common/components/typography/typography";

type AskedAt = {
  date: Date;
};

const AskedAt: FC<AskedAt> = ({ date }) => {
  const formatedAskedAt = formatAskedAt(date);
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

export default AskedAt;
