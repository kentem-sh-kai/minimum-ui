import { useState } from "react";
import Toast from "../ui/Toast";
import { Button } from "../ui/Button";

const BasicToast = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ textAlign: "center" }}>
      <Button onClick={() => setOpen(true)}>トーストを表示</Button>
      <Toast
        open={open}
        message="保存しました！"
        type="success"
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default BasicToast;
