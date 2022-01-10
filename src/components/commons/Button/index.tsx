import React, {
  MouseEventHandler,
  ReactElement,
  JSXElementConstructor
} from "react";

type Props = {
  id?: string;
  name?: string;
  type?: "button" | "reset" | "submit";
  className?: string;
  btnText?: string | ReactElement<HTMLElement, string | JSXElementConstructor<string>>;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button: React.FC<Props> = (props) => {
  return (
    <button
      id={props.id}
      name={props.name}
      onClick={props.onClick}
      className={props.className}
      disabled={props.disabled}
      type={props.type || "button"}
    >
      {props.btnText}
    </button>
  );
};
