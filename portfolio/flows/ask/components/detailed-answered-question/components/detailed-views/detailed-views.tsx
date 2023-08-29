import React, { FC } from "react";
import Typography from "../../../../../common/components/typography/typography";
import Icon from "../../../../../common/components/icon/icon";
import { AiFillEye } from "react-icons/ai";

export type DetailedViews = {
  views: number;
};

const DetailedViews: FC<DetailedViews> = ({ views }) => {
  return (
    <div className="flex flex-row justify-start items-center gap-1">
      <Icon icon={AiFillEye} color="normal" />
      <Typography
        color="normal"
        component="p"
        size="tiny"
        spacing="normal"
        weight="light"
        whitespace="normal"
      >
        {views} views
      </Typography>
    </div>
  );
};

export default DetailedViews;
