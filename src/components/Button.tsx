import React from "react";

type ButtonProps = {
    type?: "button" | "reset" | "submit"
    className: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    name: string
    "data-name"?: string
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      type={props.type}
      className={props.className}
      onClick={props.onClick}
      data-name={props["data-name"]}
    >
      {" "}
      {props.name}
    </button>
  );
}


