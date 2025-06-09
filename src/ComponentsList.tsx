/**
 * ========================
 * UIカタログ部品データ配列
 * ========================
 *
 * フィールド説明と命名・importルール
 *
 * - id
 *   英語スネークケース、小文字＋カテゴリ・用途を組み合わせる
 *   例: "button_basic", "input_basic", "radio_primary"
 *
 * - name
 *   サイドバーやプレビュー表示用の日本語名称（短く端的に）
 *   例: "基本のボタン", "テキスト入力", "チェックボックス"
 *
 * - isActive
 *   現在選択中の部品かどうか（UI表示・切り替え用）
 *
 * - preview
 *   デモ用JSX。各部品のデモコンポーネントを<BasicButtonDemo />のように渡す
 *   例: preview: <BasicButtonDemo />
 *
 * - uiCode
 *   部品実装ソースコード（string）。
 *   推奨: ?raw importでファイル内容をそのまま文字列で持つ
 *   命名規則:
 *     uiファイル名＋"Code"でimport名を統一
 *     例: Button.tsx → ButtonCode
 *   ファイル配置:
 *     ui/ディレクトリ（例: components/ui/Button.tsx）
 *   import例:
 *     import ButtonCode from '../ui/Button.tsx?raw';
 *
 * - useCode
 *   部品の使用例ソースコード（string）。
 *   推奨: ?raw importでファイル内容をそのまま文字列で持つ
 *   命名規則:
 *     Demoコンポーネント名＋"Code"でimport名を統一
 *     例: BasicButtonDemo.tsx → BasicButtonDemoCode
 *   ファイル配置:
 *     demos/ディレクトリ（例: components/demos/BasicButtonDemo.tsx）
 *   import例:
 *     import BasicButtonDemoCode from '../demos/BasicButtonDemo.tsx?raw';
 *
 * - 必要に応じて他のフィールドも拡張OK（例: description, category, icon など）
 *
 * -------------------------------------------------
 * 例:
 * {
 *   id: "button_basic",
 *   name: "基本のボタン",
 *   isActive: false,
 *   preview: <BasicButtonDemo />,
 *   uiCode: ButtonCode,                // import ButtonCode from '../ui/Button.tsx?raw'
 *   useCode: BasicButtonDemoCode       // import BasicButtonDemoCode from '../demos/BasicButtonDemo.tsx?raw'
 * }
 *
 * サイドバーのリスト、右側のプレビュー＆コード表示を自動で切り替える設計とする。
 */

import BasicButton from "./components/demos/BasicButtonDemo";
import BasicButtonCode from "./components/ui/Button?raw";
import BasicButtonDemoCode from "./components/demos/BasicButtonDemo?raw";

import BasicModal from "./components/demos/BasicModalDemo";
import BasicModalCode from "./components/ui/Modal?raw";
import BasicModalDemoCode from "./components/demos/BasicModalDemo?raw";

import HeadlessUIModalDemo from "./components/demos/HeadlessUIModalDemo";
import HeadlessUIModalCode from "./components/ui/HeadlessUIModal?raw";
import HeadlessUIModalDemoCode from "./components/demos/HeadlessUIModalDemo?raw";

import HeadlessUIDropdownMenuDemo from "./components/demos/HeadlessUIDropdownMenuDemo";
import HeadlessUIDropdownMenuCode from "./components/ui/HeadlessUIDropdownMenu?raw";
import HeadlessUIDropdownMenuDemoCode from "./components/demos/HeadlessUIDropdownMenuDemo?raw";

import HeadlessUIListboxDemo from "./components/demos/HeadlessUIListboxDemo";
import HeadlessUIListboxCode from "./components/ui/HeadlessUIListbox?raw";
import HeadlessUIListboxDemoCode from "./components/demos/HeadlessUIListboxDemo?raw";

import BasicInput from "./components/demos/BasicInputDemo";
import BasicInputCode from "./components/ui/Input?raw";
import BasicInputDemoCode from "./components/demos/BasicInputDemo?raw";

import BasicToast from "./components/demos/BasicToastDemo";
import BasicToastCode from "./components/ui/Toast?raw";
import BasicToastDemoCode from "./components/demos/BasicToastDemo?raw";

import ReactHookFormDemo from "./components/demos/ReactHookFormDemo";
import ReactHookFormDemoCode from "./components/demos/ReactHookFormDemo?raw";

import FormReactHookFormWithZodDemo from "./components/demos/FormReactHookFormWithZodDemo";
import FormReactHookFormWithZodDemoCode from "./components/demos/FormReactHookFormWithZodDemo?raw";

import type { ComponentType } from "./App";

const componentsList = [
  {
    id: "button_basic",
    name: "基本のボタン",
    isActive: true,
    preview: <BasicButton />,
    uiCode: BasicButtonCode,
    useCode: BasicButtonDemoCode,
  },
  {
    id: "input_basic",
    name: "基本のテキスト入力",
    isActive: false,
    preview: <BasicInput />,
    uiCode: BasicInputCode,
    useCode: BasicInputDemoCode,
  },
  {
    id: "modal_basic",
    name: "基本のモーダル",
    isActive: false,
    preview: <BasicModal />,
    uiCode: BasicModalCode,
    useCode: BasicModalDemoCode,
  },
  {
    id: "modal_headless-ui",
    name: "基本のモーダル(HeadlessUI)",
    isActive: false,
    preview: <HeadlessUIModalDemo />,
    uiCode: HeadlessUIModalCode,
    useCode: HeadlessUIModalDemoCode,
  },
  {
    id: "dropdown_headless-ui",
    name: "基本のドロップダウン(HeadlessUI)",
    isActive: false,
    preview: <HeadlessUIDropdownMenuDemo />,
    uiCode: HeadlessUIDropdownMenuCode,
    useCode: HeadlessUIDropdownMenuDemoCode,
  },
    {
    id: "listbox_headless-ui",
    name: "基本のリストボックス(HeadlessUI)",
    isActive: false,
    preview: <HeadlessUIListboxDemo />,
    uiCode: HeadlessUIListboxCode,
    useCode: HeadlessUIListboxDemoCode,
  },
  {
    id: "toast_basic",
    name: "基本のトースト",
    isActive: false,
    preview: <BasicToast />,
    uiCode: BasicToastCode,
    useCode: BasicToastDemoCode,
  },
  {
    id: "react-hook-form",
    name: "React Hook Form VS useState",
    isActive: false,
    preview: <ReactHookFormDemo />,
    uiCode: "",
    useCode: ReactHookFormDemoCode,
  },
    {
    id: "form-react-hook-form-with-zod",
    name: "フォーム (React Hook Form)",
    isActive: false,
    preview: <FormReactHookFormWithZodDemo />,
    uiCode: "",
    useCode: FormReactHookFormWithZodDemoCode,
  },
];

const GetComponentsList = (): ComponentType[] => {
  return componentsList;
};

export default GetComponentsList;
