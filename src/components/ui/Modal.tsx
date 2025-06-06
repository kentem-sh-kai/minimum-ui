import { css } from "@emotion/react";
import React, { useEffect } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const overlayStyle = css`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const modalStyle = css`
  background: #fff;
  min-width: 320px;
  max-width: 90vw;
  min-height: 120px;
  border-radius: 10px;
  box-shadow: 0 4px 24px #0003;
  padding: 32px 24px;
  position: relative;
  animation: modalIn 0.18s;
  @keyframes modalIn {
    from { transform: translateY(24px) scale(0.96); opacity: 0; }
    to { transform: none; opacity: 1; }
  }
`;

const closeBtn = css`
  position: absolute;
  top: 10px;
  right: 14px;
  background: none;
  border: none;
  font-size: 1.5em;
  color: #555;
  cursor: pointer;
`;

export function Modal({ open, onClose, children }: ModalProps) {
  // ESCキーで閉じる
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div css={overlayStyle} onClick={onClose}>
      <div
        css={modalStyle}
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button css={closeBtn} aria-label="閉じる" onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
