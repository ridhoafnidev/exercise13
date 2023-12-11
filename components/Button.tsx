import { ButtonProps } from "@/types";
import React from "react";

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-md border ${variant}`}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
