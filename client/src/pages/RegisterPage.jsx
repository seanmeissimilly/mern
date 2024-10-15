import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";

function RegisterPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (values) => {
    const res = await registerRequest(values);
    console.log(res);
  };

  return (
    <div>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-3xl font-bold">Register</h1>
        <input
          type="text"
          {...register("username", { required: true })}
          placeholder="Username"
          className=""
        />
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
          className=""
        />
        <input
          type="password"
          {...register("password", { required: true, minLength: 8 })}
          placeholder="Password"
          className=""
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
