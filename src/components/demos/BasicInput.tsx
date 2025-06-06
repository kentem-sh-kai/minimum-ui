import { useState } from "react";
import Input from "../ui/Input";

const BasicInput = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="テキストを入力"
      />
      <p>{value}</p>
    </>
  );
};

export default BasicInput;
