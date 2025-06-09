import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { css } from "@emotion/react";

type Person = { id: number; name: string };

type Props = {
  options: Person[];
  value: Person;
  onChange: (value: Person) => void;
};

const wrapperStyle = css`
  width: 220px;
  margin: 80px auto 0;
  position: relative;
`
const buttonStyle = css`
  width: 100%;
  padding: 0.55rem 2.2rem 0.55rem 1.1rem;
  border-radius: 0.75rem;
  background: rgba(255, 0, 0, 0.08);
  color: black;
  text-align: left;
  font-size: 1rem;
  border: none;
  position: relative;
  outline: none;
  &:focus {
    outline: 2px solid #c7cfff;
    outline-offset: 2px;
  }
`

const optionsStyle = css`
  margin-top: 0.2rem;
  background: rgba(255,255,255,0.08);
  border: 1px solid #fff2;
  border-radius: 1rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  padding: 0.4rem 0;
  z-index: 100;
  min-width: 100%;
  position: absolute;
  left: 0;
`

const optionStyle = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  border-radius: 0.6rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: black;
  user-select: none;
  background: transparent;
  transition: background 0.13s;
  &:hover {
    background: #c5c5c5;
  }
`

const nameStyle = css`
  flex: 1;
`

const HeadlessUIListbox = ({ options, value, onChange }: Props) => {
  return (
    <div css={wrapperStyle}>
      <Listbox value={value} onChange={onChange}>
        <ListboxButton css={buttonStyle}>
          {value.name}
        </ListboxButton>
        <ListboxOptions css={optionsStyle}>
          {options.map((person) => (
            <ListboxOption
              key={person.id}
              value={person}
              css={optionStyle}
            >
              <div css={nameStyle}>{person.name}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  )
}


export default HeadlessUIListbox;
