import { css } from '@emotion/react';
import React from 'react';

// propsの型定義
type RadioProps = {
  children?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

// ラッパー要素のスタイル
const wrapperStyle = (disabled?: boolean) => css`
  display: inline-flex;
  align-items: center;
  cursor: ${disabled ? 'not-allowed' : 'pointer'};
  opacity: ${disabled ? 0.5 : 1};
  user-select: none;
`;

// ネイティブのラジオボタンは画面外に隠す
const hiddenInputStyle = css`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
`;

// 見た目用のカスタムラジオボタン
const customRadioStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1rem; /* 16px */
  height: 1rem;
  border: 1px solid #cbd5e0; /* Gray 300 */
  border-radius: 50%; /* 円形にする */
  transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
  margin-right: 0.5rem; /* 8px */

  /* 内側の円（チェックマークの代わり） */
  &::after {
    content: '';
    display: block;
    width: 0.5rem; /* 8px */
    height: 0.5rem;
    border-radius: 50%;
    background-color: white;
    transform: scale(0); /* 最初は非表示 */
    transition: transform 0.2s;
  }

  /* 非表示のinputが:checkedの時のスタイル */
  input:checked + & {
    background-color: #3182ce; /* Blue 500 */
    border-color: #3182ce;
  }

  /* チェックされたら内側の円を表示 */
  input:checked + &::after {
    transform: scale(1);
  }

  /* 非表示のinputがフォーカスされた時のスタイル */
  input:focus-visible + & {
    box-shadow: 0 0 0 2px #3182ce80;
  }
`;

const labelTextStyle = css`
  font-size: 1rem;
`;

export const Radio = ({ children, disabled, ...props }: RadioProps) => {
  return (
    <label css={wrapperStyle(disabled)}>
      <input
        type="radio"
        css={hiddenInputStyle}
        disabled={disabled}
        {...props}
      />
      <span css={customRadioStyle}></span>
      {children && <span css={labelTextStyle}>{children}</span>}
    </label>
  );
};