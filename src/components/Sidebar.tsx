import { css } from "@emotion/react";
import type { ComponentType } from "../App";

// スタティックなスタイルはcss変数で定義
const slidebar = css`
  width: 30%;
  height: 96vh;
  border: 1px solid #ddd;
`;

const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background: none;
    border: none;
    color: #08c;
    margin: 0;
    font-size: 16px;
    cursor: pointer;
  }

  h1 {
    margin: 0 auto;
  }
`;

const slidebarComponents = css`
  height: calc(98vh - 78px);
  overflow-y: scroll;
`;

const slidebarComponent = (isActive: boolean) => css`
  padding: 25px;
  cursor: pointer;
  border: 1px solid #568a04;
  background: ${isActive ? "#e2e2e2" : "white"};
  transition: background 0.2s;

  &:hover {
    background: #e2e2e2;
  }
`;

type SidebarProps = {
  components: ComponentType[];
  onCheckedComponent: (selectedComponentId: string) => void
};

const Sidebar = ({
  components,
  onCheckedComponent
}: SidebarProps) => {
  return (
    <div css={slidebar}>
      <div css={header}>
        <h1>部品集</h1>
      </div>
      <div css={slidebarComponents}>
        {components.map((component) => (
          <div
            key={component.id}
            css={slidebarComponent(component.isActive)}
            onClick={() => onCheckedComponent(component.id)}
          >
            {component.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
