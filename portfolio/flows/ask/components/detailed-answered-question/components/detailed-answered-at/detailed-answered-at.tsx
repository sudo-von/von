import React, { FC } from "react";
import { MdDateRange } from "react-icons/md";
import Icon from "../../../../../common/components/icon/icon";
import AnsweredAt, { AnsweredAtProps } from "../../../answered-at/answered-at";

export type DetailedAnsweredAtProps = {
  answeredAt: string;
};

const DetailedAnsweredAt: FC<DetailedAnsweredAtProps> = ({ answeredAt }) => {
  const castedAnsweredAt = new Date(answeredAt);
  return (
    <div className="flex flex-row justify-start items-center gap-2">
      <Icon icon={MdDateRange} color="normal" />
      <AnsweredAt answeredAt={castedAnsweredAt} />
    </div>
  );
};

export default DetailedAnsweredAt;
