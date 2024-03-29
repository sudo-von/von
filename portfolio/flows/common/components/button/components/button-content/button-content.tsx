import { FC, ReactNode } from "react";
import Icon from "@common/components/icon/icon";
import { AiOutlineLoading } from "react-icons/ai";
import Typography from "@common/components/typography/typography";

export type ButtonContentProps = {
  loading?: boolean;
  children: ReactNode;
};

const ButtonContent: FC<ButtonContentProps> = ({ children, loading }) => {
  return (
    <div className="flex flex-row justify-center items-center gap-4">
      {loading && (
        <div className="animate-spin">
          <Icon icon={AiOutlineLoading} color="normal" />
        </div>
      )}
      <Typography
        color="light"
        component="p"
        size="normal"
        spacing="normal"
        weight="normal"
        whitespace="normal"
      >
        {children}
      </Typography>
    </div>
  );
};

export default ButtonContent;
