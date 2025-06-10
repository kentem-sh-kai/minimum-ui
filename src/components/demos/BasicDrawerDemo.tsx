/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useCallback } from "react";

// Drawer関連の部品だけをインポート
import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerCloseButton,
} from "../ui/Drawer";

// --- スタイル定義 ---
const containerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 2rem;
  font-family: sans-serif;
`;

const plainButtonStyle = css`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 0.375rem;
  border: 1px solid #cbd5e0;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #f7fafc;
  }
`;
// --- ここまでスタイル定義 ---

const BasicDrawerDemo = () => {
  // 1. Drawerの開閉状態を管理する
  const [isOpen, setIsOpen] = useState(false);

  // 2. 開閉を操作する関数を定義する
  const openDrawer = useCallback(() => setIsOpen(true), []);
  const closeDrawer = useCallback(() => setIsOpen(false), []);

  return (
    <div css={containerStyle}>
      {/* 3. 他の自作コンポーネントに依存しない、素のbuttonでDrawerを開く */}
      <button css={plainButtonStyle} onClick={openDrawer}>
        Drawerを開く
      </button>

      {/* 4. Drawerコンポーネントの配置 */}
      <Drawer isOpen={isOpen} onClose={closeDrawer} placement="left">
        <DrawerHeader>
          ドロワーのタイトル
          <DrawerCloseButton onClick={closeDrawer} />
        </DrawerHeader>

        <DrawerBody>
          <p>ここにドロワーのコンテンツが入ります。</p>
          <p>リストやフォームなどを配置できます。</p>
        </DrawerBody>

        <DrawerFooter>
          {/* フッター用のボタンも素のbuttonで表現 */}
          <button css={plainButtonStyle} onClick={closeDrawer}>
            閉じる
          </button>
        </DrawerFooter>
      </Drawer>
    </div>
  );
};

export default BasicDrawerDemo;
