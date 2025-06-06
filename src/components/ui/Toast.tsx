import { css } from "@emotion/react";

type ToastProps = {
  message: string;
  type?: "success" | "error" | "info";
  open: boolean;
  onClose?: () => void;
};

const toastBase = css`
  position: fixed;
  left: 50%;
  bottom: 44px;
  transform: translateX(-50%);
  min-width: 200px;
  max-width: 90vw;
  padding: 14px 28px;
  border-radius: 6px;
  font-size: 1rem;
  color: #fff;
  box-shadow: 0 6px 24px #0003;
  z-index: 9999;
  text-align: center;
  animation: toastIn 0.23s;
  @keyframes toastIn {
    from { opacity: 0; transform: translateX(-50%) translateY(32px);}
    to { opacity: 1; transform: translateX(-50%) translateY(0);}
  }
`;

const toastColors = {
  success: "background: #29d394;",
  error:   "background: #f55d5d;",
  info:    "background: #347cff;",
};

const closeBtn = css`
  margin-left: 1em;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.1em;
  cursor: pointer;
`;

const Toast = ({ message, type = "info", open, onClose }: ToastProps) => {
  if (!open) return null;
  return (
    <div css={[toastBase, toastColors[type]]}>
      {message}
      {onClose && (
        <button css={closeBtn} onClick={onClose} aria-label="閉じる">×</button>
      )}
    </div>
  );
};

export default Toast;
