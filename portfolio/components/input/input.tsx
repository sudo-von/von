import { ComponentPropsWithoutRef, FC } from "react";
import InputHintWrapper from "./components/input-hint-wrapper/input-hint-wrapper";
import InputLabelWrapper from "./components/input-label-wrapper/input-label-wrapper";

export type InputProps = ComponentPropsWithoutRef<"input"> & {
  hint?: string;
  label?: string;
  error?: boolean;
};

const Input: FC<InputProps> = ({
  id,
  hint,
  name,
  type,
  label,
  error,
  value,
  required,
  onChange,
  placeholder,
}) => {
  const textClassName =
    "text-slate-850 placeholder-slate-300 font-light text-sm";
  const borderClassName = error
    ? "border-red-100 focus:border-red-200"
    : "border-slate-100 focus:border-slate-200";
  const inputClassName = `${textClassName} ${borderClassName} w-full p-3 pr-11 border rounded focus:outline-none`;
  return (
    <InputLabelWrapper label={label} error={error}>
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
    </InputLabelWrapper>
  );
};

export default Input;
