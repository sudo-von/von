import { FC } from "react";
import Input, { InputProps } from "../Input/Input";
import Typography from "../Typography/Typography";

type HelperInputProps = InputProps & {
  helper: string;
};

const HelperInput: FC<HelperInputProps> = ({
  id,
  name,
  value,
  helper,
  required,
  onChange,
  placeholder,
}) => {
  return (
    <div>
      <Input
        id={id}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
        placeholder={placeholder}
      />
      <div className="mt-1">
        <Typography
          variant="legend"
          color="slate"
          weight="light"
          spacing="wide"
        >
          {helper}
        </Typography>
      </div>
    </div>
  );
};

export default HelperInput;
