import { css, keyframes } from '@emotion/react';
import React from 'react';

// propsの型定義
type SpinnerProps = {
  size?: string; // 例: '2rem', '40px'
  thickness?: string; // 例: '2px'
  speed?: string; // 例: '0.6s'
  color?: string; // 軌跡の色
  emptyColor?: string; // 回転部分の色
} & React.HTMLAttributes<HTMLDivElement>;

// CSSのキーフレームアニメーションを定義
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// スタイルを動的に生成する
const spinnerStyle = ({
  size = '1.5rem',
  thickness = '2px',
  speed = '0.45s',
  color = '#e2e8f0', // Gray 200
  emptyColor = '#3182ce', // Blue 500
}: Omit<SpinnerProps, 'children'>) => css`
  display: inline-block;
  border-radius: 50%;
  width: ${size};
  height: ${size};
  
  /* borderで円の軌跡を作り、片方の色だけを変えることでスピナーに見せる */
  border: ${thickness} solid ${color};
  border-left-color: ${emptyColor};
  
  /* spinアニメーションを適用 */
  animation: ${spin} ${speed} linear infinite;
`;


export const Spinner = (props: SpinnerProps) => {
  const { size, thickness, speed, color, emptyColor, ...rest } = props;
  return (
    <div
      css={spinnerStyle({ size, thickness, speed, color, emptyColor })}
      {...rest}
    />
  );
};