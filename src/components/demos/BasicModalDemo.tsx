/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useCallback } from 'react';

// UI部品をインポート
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button'; 

// --- スタイル定義 ---
const containerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 2rem;
  font-family: sans-serif;
`;

const buttonGroupStyle = css`
  text-align: right;
  margin-top: 1.5rem;
`;
// --- ここまでスタイル定義 ---


const ModalExample = () => {
  // 1. モーダルの開閉状態をこのコンポーネント内で直接管理する
  const [isOpen, setIsOpen] = useState(false);

  // 2. 開閉を操作する関数もここで定義する
  // (useCallbackで囲むことで、不要な再生成を防ぐ)
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <div css={containerStyle}>
      <Button onClick={openModal}>モーダルを開く</Button>

      {/* 3. Modalコンポーネントに状態と操作を渡す */}
      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2>モーダルのタイトル</h2>
        <p>
          このモーダルのロジックは、すべてこのページコンポーネント内に記述されています。
        </p>
        <div css={buttonGroupStyle}>
          <Button onClick={closeModal}>OK</Button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalExample;