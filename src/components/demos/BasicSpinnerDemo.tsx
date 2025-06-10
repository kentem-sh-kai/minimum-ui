import { css } from '@emotion/react';

import { Spinner } from '../ui/Spinner'; // 作成したUI部品

const containerStyle = css`
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
  gap: 1.5rem;
  align-items: center;
  flex-wrap: wrap;
`;

const BasicSpinnerDemo = () => {
  return (
    <div css={containerStyle}>
      <h1>Spinner コンポーネント</h1>

      <h2 css={headingStyle}>サイズのバリエーション</h2>
      <div css={groupStyle}>
        <Spinner size="1rem" />
        <Spinner size="1.5rem" /> {/* デフォルト */}
        <Spinner size="2rem" />
        <Spinner size="3rem" />
      </div>

      <h2 css={headingStyle}>色の変更</h2>
      <div css={groupStyle}>
        <Spinner emptyColor="red" />
        <Spinner emptyColor="#38A169" /> {/* Green */}
        <Spinner emptyColor="purple" color="#f0f0f0" />
      </div>

      <h2 css={headingStyle}>速度と太さの変更</h2>
      <div css={groupStyle}>
        <Spinner speed="1s" />
        <Spinner speed="0.3s" />
        <Spinner thickness="4px" />
        <Spinner thickness="5px" emptyColor="black" />
      </div>

      <h2 css={headingStyle}>テキストとの組み合わせ</h2>
      <div css={groupStyle}>
        <Spinner size="1rem" />
        <span>読み込み中...</span>
      </div>
    </div>
  );
};

export default BasicSpinnerDemo;