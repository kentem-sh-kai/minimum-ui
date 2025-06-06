import { css } from "@emotion/react";
import React, { useState } from "react";
import type { ComponentType } from "../App";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const CodePreviewStyle = css`
  width: 50%;
  height: 45vh;
  border: 1px solid #ddd;
  border-radius: 12px;
  margin: 12px;
  overflow-y: scroll;
  overflow-x: scroll;
  padding: 8px;
  position: relative;
`;

const CopyButtonStyle = css`
  position: absolute;
  top: 12px;
  right: 16px;
  padding: 4px 14px;
  border: none;
  border-radius: 4px;
  background: #f2f2f2;
  color: #333;
  font-size: 0.97em;
  cursor: pointer;
  transition: background 0.16s;
  &:hover {
    background: #e0eaff;
  }
`;

const CopiedMessageStyle = css`
  position: absolute;
  top: 12px;
  right: 100px;
  background: #d4ffe6;
  color: #2e7d32;
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 0.93em;
  pointer-events: none;
  opacity: 0.97;
  z-index: 10;
`;

type PlayGrandProps = {
  activeComponent: ComponentType;
  type: "ui" | "use";
};

const CodePreview = ({ activeComponent, type }: PlayGrandProps) => {
  const [copied, setCopied] = useState(false);

  // コピー対象のコード
  const code =
    type === "ui"
      ? activeComponent.uiCode
      : activeComponent.useCode;

  // コードブロック用マークダウン
  const mdCode = `\`\`\`tsx
${code}
\`\`\``;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      alert("コピーに失敗しました");
    }
  };

  return (
    <div css={CodePreviewStyle}>
        <div>{type==="use" ? "使用側のコード": "UI側のコード"}</div>
      <button css={CopyButtonStyle} onClick={handleCopy}>
        コピー
      </button>
      {copied && <span css={CopiedMessageStyle}>コピーしました！</span>}
      <div style={{ marginTop: 32 }}>
        <ReactMarkdown rehypePlugins={[remarkGfm]}>
          {mdCode}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default CodePreview;
