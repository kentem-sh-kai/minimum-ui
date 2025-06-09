import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(1, "名前を入力してください").max(10, "10文字以内で"),
  age: z.string().refine((val) => /^\d+$/.test(val), "数字で入力してください"),
});

type FormData = z.infer<typeof schema>;

const FormReactHookFormWithZodDemo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  return (
    <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
      <div>
        <input {...register("name")} placeholder="名前" />
        {errors.name && (
          <span style={{ color: "red" }}>{errors.name.message}</span>
        )}
      </div>
      <div>
        <input {...register("age")} placeholder="年齢" />
        {errors.age && (
          <span style={{ color: "red" }}>{errors.age.message}</span>
        )}
      </div>
      <button type="submit">送信</button>
    </form>
  );
};

export default FormReactHookFormWithZodDemo;
