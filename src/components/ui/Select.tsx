/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

// propsの型定義からsizeを削除
type SelectProps = {
  isInvalid?: boolean;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

// ラッパー。アイコンを配置するために relative を指定
const wrapperStyle = css`
  position: relative;
  width: 100%;
`;

// select要素のスタイル。引数からsizeを削除
const selectStyle = (isInvalid?: boolean) => css`
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid #cbd5e0;
  transition: border-color 0.2s, box-shadow 0.2s;
  
  /* 固定のサイズを適用 */
  height: 2.5rem;
  padding: 0 0.75rem;
  font-size: 1rem;
  
  /* ブラウザのデフォルトの矢印を消す */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  
  /* カスタム矢印のスペースを確保 */
  padding-right: 2.5rem; 

  /* isInvalidがtrueの時だけ適用されるスタイル */
  ${isInvalid &&
  `
    border-color: #e53e3e;
    box-shadow: 0 0 0 1px #e53e3e;
  `}

  &:focus-visible {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 1px #3182ce;
  }

  &:disabled {
    opacity: 0.5;
    background-color: #edf2f7;
    cursor: not-allowed;
  }
`;

// カスタム矢印のラッパーとアイコン（変更なし）
const iconWrapperStyle = css`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 2.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  color: #a0aec0;
`;
const SelectIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
  </svg>
);


// コンポーネント本体。引数とpropsからsizeを削除
export const Select = ({ isInvalid, children, ...props }: SelectProps) => {
  return (
    <div css={wrapperStyle}>
      <select css={selectStyle(isInvalid)} {...props}>
        {children}
      </select>
      <div css={iconWrapperStyle}>
        <SelectIcon />
      </div>
    </div>
  );
};