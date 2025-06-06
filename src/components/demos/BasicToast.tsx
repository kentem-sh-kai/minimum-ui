import { useState } from "react";
import Toast from "../ui/Toast";

const BasicToast = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={() => setOpen(true)}>トーストを表示</button>
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
