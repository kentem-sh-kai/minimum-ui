import { css } from "@emotion/react";
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
`;

type PlayGrandProps = {
  activeComponent: ComponentType;
  type: string;
};

const CodePreview = ({ activeComponent, type }: PlayGrandProps) => {
  if (type === "ui") {
    return (
      <div css={CodePreviewStyle}>
        UI側のコード
        <div>
          <ReactMarkdown rehypePlugins={[remarkGfm]}>
            {`\`\`\`tsx${activeComponent.uiCode}\`\`\``}
          </ReactMarkdown>
        </div>
      </div>
    );
  } else {
    return (
      <div css={CodePreviewStyle}>
        使用側のコード
        <div>
          <ReactMarkdown rehypePlugins={[remarkGfm]}>
            {`\`\`\`tsx${activeComponent.useCode}\`\`\``}
          </ReactMarkdown>
        </div>
      </div>
    );
  }
};

export default CodePreview;
