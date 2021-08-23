import React, { ButtonHTMLAttributes, FC } from "react";

const Button: FC<ButtonHTMLAttributes<HTMLElement>> = (props) => {
  return <button {...props}>{props.children}</button>;
};

export default Button;
