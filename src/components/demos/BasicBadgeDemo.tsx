/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

import { Badge } from '../ui/Badge'; // 作成したUI部品

const containerStyle = css`
  padding: 2rem;
  font-family: sans-serif;
`;

const headingStyle = css`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
`;

const groupStyle = css`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

const BasicBadgeDemo = () => {
  return (
    <div css={containerStyle}>
      <h1>Badge コンポーネント</h1>

      <h2 css={headingStyle}>Subtle (デフォルト)</h2>
      <div css={groupStyle}>
        <Badge colorScheme="primary">Primary</Badge>
        <Badge colorScheme="success">Success</Badge>
        <Badge colorScheme="error">Error</Badge>
        <Badge colorScheme="warning">Warning</Badge>
        <Badge colorScheme="gray">Gray</Badge>
      </div>

      <h2 css={headingStyle}>Solid</h2>
      <div css={groupStyle}>
        <Badge variant="solid" colorScheme="primary">Primary</Badge>
        <Badge variant="solid" colorScheme="success">Success</Badge>
        <Badge variant="solid" colorScheme="error">Error</Badge>
        <Badge variant="solid" colorScheme="warning">Warning</Badge>
        <Badge variant="solid" colorScheme="gray">Gray</Badge>
      </div>
      
      <h2 css={headingStyle}>Outline</h2>
      <div css={groupStyle}>
        <Badge variant="outline" colorScheme="primary">Primary</Badge>
        <Badge variant="outline" colorScheme="success">Success</Badge>
        <Badge variant="outline" colorScheme="error">Error</Badge>
        <Badge variant="outline" colorScheme="warning">Warning</Badge>
        <Badge variant="outline" colorScheme="gray">Gray</Badge>
      </div>

      <h2 css={headingStyle}>テキスト内での利用</h2>
      <p style={{ fontSize: '1.5rem' }}>
        新しい機能がリリースされました！ <Badge colorScheme="success">New</Badge>
      </p>
    </div>
  );
};

export default BasicBadgeDemo;