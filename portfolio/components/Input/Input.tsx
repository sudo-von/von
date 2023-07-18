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
    "text-black-250 placeholder-gray-250 font-light text-sm";
  const borderClassName =
    "border border-gray-50 focus:border-gray-150 focus:outline-none";
  const className = `${textClassName} ${borderClassName} rounded w-full p-3`;
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
