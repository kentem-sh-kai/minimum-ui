import type { ComponentType } from "../App";
import CodePreview from "./CodePreview";
import BasicButton from "./demos/BasicButton";
import OpenModal from "./demos/OpenModal";
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

  let preview: React.ReactNode;

  switch (activeComponent.id) {
    case "modal_basic":
      preview = <OpenModal />;
      break;
    case "button_basic":
      preview = <BasicButton />;
      break;
    // 他にもcaseで増やす
    default:
      preview = <div>プレビュー未対応</div>;
  }

  return (
    <div css={PlayGrandStyle} >
      <div css={PreviewStyle}>{preview}</div>
      <div style={{display: "flex"}}>
        <CodePreview activeComponent={ activeComponent } type="ui" />
        <CodePreview activeComponent={ activeComponent } type="use"/>
      </div>
    </div>
  );
};

export default PlayGrand;
