import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { css } from "@emotion/react";

const buttonStyle = css`
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 0.5rem;
  background: #f7f7fa;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: #eeeaff;
  }
`;

const itemsStyle = css`
  margin-top: 0.4rem;
  background: #fff;
  border: 1px solid #222;
  border-radius: 0.6rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07);
  min-width: 150px;
  padding: 0.2rem 0;
  position: absolute;
  z-index: 10;
`;

const itemStyle = css`
  display: block;
  width: 100%;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  color: #2a2253;
  text-decoration: none;
  border-radius: 0.4rem;
  box-sizing: border-box;
  transition: background 0.13s;

  &[data-focus="true"],
  &[data-headlessui-state~="active"] {
    background: #e3ebff;
    outline: none;
  }

  &:hover {
    background: #efe4ff;
  }
`;

type MenuItemInfo = {
  label: string;
  href: string;
};

type Props = {
  items: MenuItemInfo[];
};

const HeadlessUIDropdownMenu = ({ items }: Props) => {
  return (
    <Menu>
      <MenuButton css={buttonStyle}>メニュー</MenuButton>
      <MenuItems css={itemsStyle}>
        {items.map((item) => (
          <MenuItem as="a" href={item.href} css={itemStyle} key={item.href}>
            {item.label}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default HeadlessUIDropdownMenu;
