import { Button } from "../ui/Button";


const BasicButton = () => {
  return (
    <div style={{ textAlign: "center", padding: 24 }}>
      <Button onClick={() => alert("ボタンがクリックされました!")}>
        基本のボタン
      </Button>
    </div>
  );
};

export default BasicButton;
