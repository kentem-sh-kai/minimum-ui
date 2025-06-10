/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

// --- Dialog本体のPropsとスタイル ---

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const overlayStyle = css`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const dialogContentStyle = css`
  background-color: white;
  padding: 1.5rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
  max-width: 450px;
  width: 90%;
`;


// --- Dialog本体のコンポーネント ---

export const Dialog = ({ isOpen, onClose, children }: DialogProps) => {
  const [isMounted, setIsMounted] = React.useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Escapeキーで閉じるためのuseEffect
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !isMounted) {
    return null;
  }

  // createPortalを使って、モーダルをbodyの直下に描画する
  return createPortal(
    <div css={overlayStyle} onClick={onClose}>
      {/*stopPropagationで、ダイアログ内部のクリックで閉じないようにする*/}
      <div css={dialogContentStyle} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
};


// --- Dialogを構成するサブコンポーネント ---

const headerStyle = css`
  padding-bottom: 0.75rem;
  font-size: 1.25rem;
  font-weight: 600;
`;
export const DialogHeader = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return <div css={headerStyle} {...props} />;
};


const bodyStyle = css`
  padding: 1rem 0;
  color: #4a5568;
`;
export const DialogBody = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return <div css={bodyStyle} {...props} />;
};


const footerStyle = css`
  padding-top: 1.5rem;
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`;
export const DialogFooter = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return <div css={footerStyle} {...props} />;
};