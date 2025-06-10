import { css } from '@emotion/react';
import { useState, useCallback } from 'react';

// Dialog.tsxから必要な部品をすべてインポート
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '../ui/Dialog';

// --- スタイル定義 ---
const containerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 2rem;
  font-family: sans-serif;
`;

const DialogExample = () => {
  // ダイアログの開閉状態をこのコンポーネントで直接管理
  const [isOpen, setIsOpen] = useState(false);
  const openDialog = useCallback(() => setIsOpen(true), []);
  const closeDialog = useCallback(() => setIsOpen(false), []);

  const handleDelete = () => {
    alert('削除処理を実行しました。');
    closeDialog();
  };

  return (
    <div css={containerStyle}>
      <button onClick={openDialog}>ダイアログを開く</button>

      {/* Dialogコンポーネントを組み立てる */}
      <Dialog isOpen={isOpen} onClose={closeDialog}>
        <DialogHeader>
          最終確認
        </DialogHeader>

        <DialogBody>
          <p>
            このアクションは元に戻すことができません。
            本当にこのデータを削除してもよろしいですか？
          </p>
        </DialogBody>

        <DialogFooter>
          <button  onClick={closeDialog}>
            キャンセル
          </button>
          <button  onClick={handleDelete}>
            削除する
          </button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default DialogExample;