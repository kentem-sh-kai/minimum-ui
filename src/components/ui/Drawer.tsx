/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

// --- Props, Styles, and Animations ---

type Placement = 'left' | 'right' | 'top' | 'bottom';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  placement?: Placement;
}

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const overlayStyle = css`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
`;

// placementに応じてスタイルを動的に生成する
const drawerContentStyle = (isOpen: boolean, placement: Placement) => {
  const baseStyle = css`
    position: fixed;
    background-color: white;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
    z-index: 1100;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease-out;
  `;

  const placementStyles = {
    left: css`
      top: 0; bottom: 0; left: 0;
      width: 300px;
      transform: ${isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    `,
    right: css`
      top: 0; bottom: 0; right: 0;
      width: 300px;
      transform: ${isOpen ? 'translateX(0)' : 'translateX(100%)'};
    `,
    top: css`
      top: 0; left: 0; right: 0;
      height: auto;
      transform: ${isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    `,
    bottom: css`
      bottom: 0; left: 0; right: 0;
      height: auto;
      transform: ${isOpen ? 'translateY(0)' : 'translateY(100%)'};
    `,
  };

  return [baseStyle, placementStyles[placement]];
};


// --- Drawer本体のコンポーネント ---

export const Drawer = ({ isOpen, onClose, children, placement = 'right' }: DrawerProps) => {
  const [isMounted, setIsMounted] = React.useState(false);
  useEffect(() => { setIsMounted(true) }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // 背景のスクロールを禁止
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto'; // スクロール禁止を解除
    };
  }, [isOpen, onClose]);

  if (!isMounted) return null;

  return createPortal(
    // isOpenがtrueの時だけ描画
    isOpen ? (
      <>
        <div css={overlayStyle} onClick={onClose}></div>
        <div css={drawerContentStyle(isOpen, placement)} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </>
    ) : null,
    document.body
  );
};


// --- Drawerを構成するサブコンポーネント ---

const headerStyle = css`
  padding: 1rem 1.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  border-bottom: 1px solid #e2e8f0;
  flex-shrink: 0; /* ヘッダーが縮まないように */
`;
export const DrawerHeader = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <header css={headerStyle} {...props} />
);


const bodyStyle = css`
  padding: 1.5rem;
  overflow-y: auto; /* 内容が多い場合にスクロールできるように */
  flex-grow: 1; /* ボディが残りの高さをすべて使うように */
`;
export const DrawerBody = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div css={bodyStyle} {...props} />
);


const footerStyle = css`
  padding: 1rem 1.5rem;
  border-top: 1px solid #e2e8f0;
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  flex-shrink: 0; /* フッターが縮まないように */
`;
export const DrawerFooter = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <footer css={footerStyle} {...props} />
);


const closeButtonStyle = css`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  border: none;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
`;
export const DrawerCloseButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button css={closeButtonStyle} aria-label="閉じる" {...props}>&times;</button>
);