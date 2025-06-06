import { css } from "@emotion/react";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const buttonStyle = css`
  padding: 0.5em 1.5em;
  background: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: #005bb5; }
  &:disabled { background: #ccc; cursor: not-allowed; }
`;

export function Button(props: ButtonProps) {
  return (
    <button css={buttonStyle} {...props}>
      {props.children}
    </button>
  );
}
