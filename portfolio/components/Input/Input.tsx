import { ComponentPropsWithoutRef, FC } from "react";

export type InputProps = ComponentPropsWithoutRef<"input">;

const Input: FC<InputProps> = ({
  id,
  name,
  type,
  value,
  required,
  onChange,
  placeholder,
}) => {
  const textClassName =
    "text-slate-850 placeholder-slate-300 font-light text-sm";
  const borderClassName =
    "border border-slate-100 focus:border-slate-200 focus:outline-none";
  const className = `${textClassName} ${borderClassName} rounded w-full p-3 pr-11`;
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      required={required}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
    />
  );
};

export default Input;
