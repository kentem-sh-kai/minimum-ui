import './App.css'
import Sidebar from './components/Sidebar'
import PlayGrand from './components/PlayGrand'
import { css } from '@emotion/react'
import { useState } from 'react';

import BasicButton from './components/demos/BasicButton';
import ButtonBasicCode from "./components/ui/Button?raw"
import ButtonBasicDemoCode from "./components/demos/BasicButton?raw"

import ModalBasicCode from "./components/ui/Modal?raw"
import ModalBasicDemoCode from "./components/demos/OpenModal?raw"
import OpenModal from './components/demos/OpenModal';

const AppStyle = css`
  display: flex;
`;

export type ComponentType = {
  id: string,
  name: string,
  isActive: boolean,
  preview: React.ReactNode,
  uiCode: string,
  useCode: string,
}

function App() {
  const [components, setComponents] = useState<ComponentType[]>(
    [
    {id: "button_basic", name: "基本のボタン", isActive: false, 
      preview: <BasicButton />, uiCode: ButtonBasicCode, useCode: ButtonBasicDemoCode},

    {id: "modal_basic", name: "基本のモーダル", isActive: false,
       preview: <OpenModal />, uiCode: ModalBasicCode, useCode: ModalBasicDemoCode},
  ]
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
    <div css={ AppStyle }>
      <Sidebar components={components} onCheckedComponent={ onCheckedComponent } />
      
      <PlayGrand components={components} />
    </div>
  )
}

export default App
