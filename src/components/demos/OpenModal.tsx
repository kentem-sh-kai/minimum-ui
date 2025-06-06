import { useState } from "react";
import { Modal } from "../ui/Modal";
import { Button } from "../ui/Button";

const OpenModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ textAlign: "center", padding: 24 }}>
      <Button onClick={() => setOpen(true)}>
        モーダルを開く
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <h2>モーダルタイトル</h2>
        <p>好きなコンテンツをここに。</p>
        <button onClick={() => setOpen(false)}>閉じる</button>
      </Modal>
    </div>
  );
};

export default OpenModal;
