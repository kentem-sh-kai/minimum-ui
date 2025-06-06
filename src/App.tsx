import "./App.css";
import Sidebar from "./components/Sidebar";
import PlayGrand from "./components/PlayGrand";
import { css } from "@emotion/react";
import { useState } from "react";
import GetComponentsList from "./ComponentsList"

const AppStyle = css`
  display: flex;
`;

export type ComponentType = {
  id: string;
  name: string;
  isActive: boolean;
  preview: React.ReactNode;
  uiCode: string;
  useCode: string;
};

function App() {
  const [components, setComponents] = useState<ComponentType[]>(
    GetComponentsList()
  );

  const onCheckedComponent = (selectedComponentId: string) => {
    setComponents((components) =>
      components.map((component) =>
        component.id === selectedComponentId
          ? { ...component, isActive: true }
          : { ...component, isActive: false }
      )
    );
  };

  return (
    <div css={AppStyle}>
      <Sidebar
        components={components}
        onCheckedComponent={onCheckedComponent}
      />

      <PlayGrand components={components} />
    </div>
  );
}

export default App;
