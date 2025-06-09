import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
};

let renderCount = 0;

const ReactHookFormDemo = () => {
  renderCount++;
  const { register, formState } = useForm<FormData>({
    mode: "onChange",
    criteriaMode: "all", // 発生した全てのエラーを受け取る
    defaultValues: {
      // 初回レンダリング時のフォームのデフォルト値
      name: "",
      email: "",
    },
  });

  const [inputText, setInputText] = useState("");

  return (
    <>
      <p>レンダリング回数: {renderCount}</p>
      <div style={{ border: "1px solid black", width: "500px", padding: "24px" }}>
        <p>react hook form</p>
        <div style={{display: "flex", flexDirection: "column"}}>
          {formState.errors && (
            <p style={{ color: "red" }}>{formState.errors.name?.message ?? "\u00A0"}</p>
          )}
          {/* 検証ルールとエラーメッセージを設定 */}
          <input
            {...register("name", {
              maxLength: {
                value: 5,
                message: "5文字以下で指定してください。",
              },
            })}
          />
        </div>
      </div>
      <div style={{ border: "1px solid black", width: "500px", padding: "24px", marginTop: "12px" }}>
        <p>useState</p>
        <div style={{display: "flex", flexDirection: "column"}}>
            <p style={{ color: "red" }}>{inputText.length > 5 ? "5文字以下で指定してください。": "\u00A0"}</p>
            <input type="text" onChange={(e) => setInputText(e.target.value)}/>
        </div>
      </div>
    </>
  );
};

export default ReactHookFormDemo;
