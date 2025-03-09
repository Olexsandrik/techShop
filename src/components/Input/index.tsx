import React from "react";
import "./index.css";

type inputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  value: string;
  name: string;
};
export const Input = (props: inputProps) => {
  return (
    <input
      className="mainInput"
      onChange={props.onChange}
      type={props.type}
      value={props.value}
      name={props.name}
    />
  );
};
