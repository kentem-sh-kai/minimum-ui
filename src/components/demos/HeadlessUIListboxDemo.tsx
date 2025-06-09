import { useState } from "react";
import HeadlessUIListbox from "../ui/HeadlessUIListbox";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

const HeadlessUIListboxDemo = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <div style={{ position: "relative", minHeight: 180 }}>
      <HeadlessUIListbox
        options={people}
        value={selectedPerson}
        onChange={setSelectedPerson}
      />
    </div>
  );
};

export default HeadlessUIListboxDemo;
