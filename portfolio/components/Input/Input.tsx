import { ComponentPropsWithoutRef, FC } from "react";
import InputHintWrapper from "./components/InputHintWrapper/InputHintWrapper";

export type InputProps = ComponentPropsWithoutRef<"input"> & {
  hint?: string;
  error?: boolean;
};

const Input: FC<InputProps> = ({
  id,
  hint,
  name,
  type,
  error,
  value,
  required,
  onChange,
  placeholder,
}) => {
  const textClassName =
    "text-slate-850 placeholder-slate-300 font-light text-sm";
  const borderClassName =
    "border border-slate-100 focus:border-slate-200 rounded focus:outline-none";
  const inputClassName = `${textClassName} ${borderClassName} w-full p-3 pr-11`;
  return (
    <InputHintWrapper hint={hint} error={error}>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        required={required}
        onChange={onChange}
        className={inputClassName}
        placeholder={placeholder}
      />
    </InputHintWrapper>
  );
};

export default Input;
