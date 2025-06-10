import { css } from '@emotion/react';
import React from 'react';

// 配色を定義
const colorSchemes = {
  primary: { bg: '#EBF8FF', color: '#3182CE' }, // Blue
  success: { bg: '#F0FFF4', color: '#38A169' }, // Green
  error: { bg: '#FFF5F5', color: '#E53E3E' },   // Red
  warning: { bg: '#FFFAF0', color: '#DD6B20' }, // Orange
  gray: { bg: '#F7FAFC', color: '#4A5568' },    // Gray
};

// propsの型定義
type BadgeProps = {
  variant?: 'solid' | 'outline' | 'subtle';
  colorScheme?: keyof typeof colorSchemes;
} & React.HTMLAttributes<HTMLSpanElement>;

// スタイルを動的に生成する
const badgeStyle = ({
  variant = 'subtle',
  colorScheme = 'gray',
}: Pick<BadgeProps, 'variant' | 'colorScheme'>) => {
  const scheme = colorSchemes[colorScheme];

  const baseStyle = css`
    display: inline-flex;
    align-items: center;
    padding: 0.125rem 0.5rem; /* 2px 8px */
    border-radius: 0.25rem; /* 4px */
    font-size: 0.75rem; /* 12px */
    font-weight: 600;
    text-transform: uppercase;
  `;

  const variantStyles = {
    solid: css`
      background-color: ${scheme.color};
      color: white;
    `,
    outline: css`
      color: ${scheme.color};
      box-shadow: inset 0 0 0 1px ${scheme.color};
    `,
    subtle: css`
      background-color: ${scheme.bg};
      color: ${scheme.color};
    `,
  };

  return [baseStyle, variantStyles[variant]];
};


export const Badge = ({
  variant,
  colorScheme,
  ...props
}: BadgeProps) => {
  return <span css={badgeStyle({ variant, colorScheme })} {...props} />;
};