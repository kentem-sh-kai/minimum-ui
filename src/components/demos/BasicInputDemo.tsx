import { useState } from "react";
import Input from "../ui/Input";

const BasicInput = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <p>{value}</p>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="テキストを入力"
      />
    </>
  );
};

export default BasicInput;
