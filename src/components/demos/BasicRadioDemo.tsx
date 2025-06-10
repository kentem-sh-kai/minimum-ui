/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';

import { Radio } from '../ui/Radio';

// --- スタイル定義 ---
const containerStyle = css`
  width: 100%;
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  font-family: sans-serif;
`;

const radioGroupStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

const resultStyle = css`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
`;
// --- ここまでスタイル定義 ---

// 選択肢のデータ
const plans = [
  { id: 'free', label: 'フリープラン' },
  { id: 'basic', label: 'ベーシックプラン' },
  { id: 'premium', label: 'プレミアムプラン' },
];

const RadioExample = () => {
  // 1. 選択されているプランのIDを「文字列」としてstateで管理
  const [selectedPlan, setSelectedPlan] = useState<string>('free');

  // 2. ラジオボタンが変更されたときに、選択されたプランのIDでstateを更新
  const handlePlanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPlan(e.target.value);
  };

  return (
    <div css={containerStyle}>
      <h2>プランを選択してください</h2>

      <div css={radioGroupStyle}>
        {/* 3. データをもとに、ラジオボタンを動的に生成 */}
        {plans.map((plan) => (
          <Radio
            key={plan.id}
            id={plan.id}
            name="subscription-plan" // ★ 全て同じnameを指定することが重要
            value={plan.id}
            // 4. 現在の選択プランとIDが一致するかどうかで、checkedの状態を判断
            checked={selectedPlan === plan.id}
            onChange={handlePlanChange}
          >
            {plan.label}
          </Radio>
        ))}
      </div>

      {/* 5. 現在のstateの中身を可視化して、動作を確認する */}
      <div css={resultStyle}>
        <strong>現在の選択 (stateの中身):</strong>
        <pre>"{selectedPlan}"</pre>
      </div>
    </div>
  );
};

export default RadioExample;