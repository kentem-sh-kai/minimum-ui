/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';

import { ProgressBar } from '../ui/ProgressBar'; // 作成したUI部品

const containerStyle = css`
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  font-family: sans-serif;
`;

const headingStyle = css`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

const groupStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const BasicProgressBarDemo = () => {
  // 動的なデモ用のstate
  const [progress, setProgress] = useState(10);

  // 2秒ごとにプログレスを10進める
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 10 : prev + 10));
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div css={containerStyle}>
      <h1>ProgressBar コンポーネント</h1>

      <h2 css={headingStyle}>基本的な使い方</h2>
      <ProgressBar value={60} />

      <h2 css={headingStyle}>色のバリエーション</h2>
      <div css={groupStyle}>
        <ProgressBar value={20} colorScheme="success" />
        <ProgressBar value={40} colorScheme="warning" />
        <ProgressBar value={90} colorScheme="error" />
      </div>

      <h2 css={headingStyle}>ストライプ</h2>
      <div css={groupStyle}>
        <ProgressBar value={75} hasStripe />
        <ProgressBar value={50} colorScheme="success" hasStripe />
      </div>

      <h2 css={headingStyle}>アニメーション付きストライプ</h2>
      <ProgressBar value={80} hasStripe isAnimated />

      <h2 css={headingStyle}>数値の表示</h2>
      <ProgressBar value={55} showValue />
      
      <h2 css={headingStyle}>動的なプログレスバー</h2>
      <ProgressBar value={progress} colorScheme="primary" hasStripe isAnimated showValue />

    </div>
  );
};

export default BasicProgressBarDemo;