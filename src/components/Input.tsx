import React from "react";

type InputProps = {
    type: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    className: string
    placeholder: string
    value?: string
    name: string
}

export const Input = (props: InputProps) => {
  return (
    <input
      type={props.type}
      onChange={props.onChange}
      className={props.className}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
    ></input>
  );
}
