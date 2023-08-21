import { FC } from "react";
import usePassword from "./hooks/use-password";
import Input, { InputProps } from "../input/input";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

type PasswordInputProps = InputProps;

const PasswordInput: FC<PasswordInputProps> = ({
  id,
  name,
  label,
  value,
  required,
  onChange,
  placeholder,
}) => {
  const { isVisible, handleVisibility } = usePassword();
  const type = isVisible ? "text" : "password";
  const PasswordIcon = isVisible ? AiFillEyeInvisible : AiFillEye;
  return (
    <div className="relative">
      <Input
        id={id}
        name={name}
        type={type}
        label={label}
        value={value}
        required={required}
        onChange={onChange}
        placeholder={placeholder}
      />
      <PasswordIcon
        onClick={handleVisibility}
        className="absolute top-8 right-2 cursor-pointer fill-slate-350 text-2xl"
      />
    </div>
  );
};

export default PasswordInput;
