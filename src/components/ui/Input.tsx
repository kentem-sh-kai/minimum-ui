import React from "react";
import { css } from "@emotion/react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const inputStyle = css`
  padding: 0.5em 1em;
  border: 1px solid #bbb;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  transition: border 0.15s;
  &:focus {
    border-color: #0070f3;
  }
`;

const Input = (props: InputProps) => (
  <input css={inputStyle} {...props} />
);

export default Input;
