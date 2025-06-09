import HeadlessUIDropdownMenu from "../ui/HeadlessUIDropdownMenu";

const menuItems = [
  { label: "設定", href: "/settings" },
  { label: "サポート", href: "/support" },
  { label: "ライセンス", href: "/license" },
];

const HeadlessUIDropdownMenuDemo = () => {
  return (
    <div style={{ position: "relative", minHeight: "160px" }}>
      <HeadlessUIDropdownMenu items={menuItems} />
    </div>
  );
};

export default HeadlessUIDropdownMenuDemo;
