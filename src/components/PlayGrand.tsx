import type { ComponentType } from "../App";
import CodePreview from "./CodePreview";
import { css } from "@emotion/react";

const PlayGrandStyle = css`
  border-radius: 12px;
  background: #fff;
  width: 70%;
`;

const PreviewStyle = css`
  border: 1px solid #eee;
  border-radius: 12px;
  margin: 0 12px;
  background: #fff;
  width: 100%;
  height: 50vh;
`;

type PlayGrandProps = {
  components: ComponentType[];
};

const PlayGrand = ({ components }: PlayGrandProps) => {
  const activeComponent = components.find((component) => component.isActive);

  if (!activeComponent) {
    return <div>選択されていません</div>;
  }

  return (
    <div css={PlayGrandStyle}>
      <div css={PreviewStyle}>{activeComponent.preview}</div>
      <div style={{ display: "flex" }}>
        <CodePreview activeComponent={activeComponent} type="ui" />
        <CodePreview activeComponent={activeComponent} type="use" />
      </div>
    </div>
  );
};

export default PlayGrand;
