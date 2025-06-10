/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import React from 'react';

// 配色を定義
const colorSchemes = {
  primary: '#3182CE', // Blue
  success: '#38A169', // Green
  warning: '#DD6B20', // Orange
  error: '#E53E3E',   // Red
};

// propsの型定義
type ProgressBarProps = {
  value: number; // 現在の値
  max?: number;  // 最大値 (デフォルトは100)
  colorScheme?: keyof typeof colorSchemes;
  height?: string;
  hasStripe?: boolean;
  isAnimated?: boolean;
  showValue?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

// ストライプを動かすためのアニメーション
const stripeAnimation = keyframes`
  from { background-position: 1rem 0; }
  to { background-position: 0 0; }
`;

// 外側のバー（トラック）のスタイル
const trackStyle = (height: string) => css`
  position: relative;
  width: 100%;
  height: ${height};
  background-color: #e2e8f0; /* Gray 200 */
  border-radius: 9999px;
  overflow: hidden; /* 内側のバーがはみ出ないように */
`;

// 内側のバー（インジケーター）のスタイル
const indicatorStyle = ({
  colorScheme = 'primary',
  hasStripe,
  isAnimated,
}: Pick<ProgressBarProps, 'colorScheme' | 'hasStripe' | 'isAnimated'>) => css`
  height: 100%;
  background-color: ${colorSchemes[colorScheme]};
  border-radius: 9999px;
  transition: width 0.3s ease-in-out; /* 幅が変わる際にアニメーション */
  display: flex;
  align-items: center;
  justify-content: center;

  /* ストライプ模様のスタイル */
  ${hasStripe &&
  css`
    background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.15) 75%,
      transparent 75%,
      transparent
    );
    background-size: 1rem 1rem;
  `}

  /* ストライプアニメーションのスタイル */
  ${isAnimated &&
  css`
    animation: ${stripeAnimation} 1s linear infinite;
  `}
`;

const valueTextStyle = css`
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
`;

export const ProgressBar = ({
  value,
  max = 100,
  height = '1rem',
  colorScheme,
  hasStripe,
  isAnimated,
  showValue,
  ...props
}: ProgressBarProps) => {
  // valueが0未満にならないように、またmaxを超えないように調整
  const clampedValue = Math.max(0, Math.min(value, max));
  const percentage = (clampedValue / max) * 100;

  return (
    <div
      css={trackStyle(height)}
      role="progressbar"
      aria-valuenow={clampedValue}
      aria-valuemin={0}
      aria-valuemax={max}
      {...props}
    >
      <div
        css={indicatorStyle({ colorScheme, hasStripe, isAnimated })}
        style={{ width: `${percentage}%` }}
      >
        {showValue && <span css={valueTextStyle}>{Math.round(percentage)}%</span>}
      </div>
    </div>
  );
};