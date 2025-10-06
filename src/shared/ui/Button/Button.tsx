import type { ButtonHTMLAttributes } from "react";
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ className, ...rest }) => {
  return <button {...rest} className={`btn ${className ?? ""}`.trim()} />;
};
