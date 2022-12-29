import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="range"
        placeholder="How ya feelin?"
        {...register("How ya feelin?", {})}
      />
      <input
        type="range"
        placeholder="Gettin shit done?"
        {...register("Gettin shit done?", {})}
      />
      <input
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="tel"
        placeholder="Mobile number"
        {...register("Mobile number", {
          required: true,
          minLength: 6,
          maxLength: 12,
        })}
      />
      <select {...register("Title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>

      <input
        {...register("Developer", { required: true })}
        type="radio"
        value="Yes"
      />
      <input
        {...register("Developer", { required: true })}
        type="radio"
        value="No"
      />

      <input type="submit" />
    </form>
  );
}
