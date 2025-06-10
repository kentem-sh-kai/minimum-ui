import { css } from '@emotion/react';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

// スタイル定義
const overlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const contentStyle = css`
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
  max-width: 500px;
  width: 90%;
  position: relative;
`;

const closeButtonStyle = css`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  border: none;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  color: #a0aec0;
  &:hover {
    color: #4a5568;
  }
`;

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const [isMounted, setIsMounted] = React.useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  return createPortal(
    <div css={overlayStyle} onClick={onClose}>
      <div css={contentStyle} onClick={(e) => e.stopPropagation()}>
        <button css={closeButtonStyle} onClick={onClose} aria-label="閉じる">
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};