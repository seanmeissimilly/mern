import { useForm } from "react-hook-form";
import { loginRequest } from "../api/auth";

function LoginPage() {
  const { login, handleSubmit } = useForm();

  const onSubmit = async (values) => {
    const res = await loginRequest(values);
    console.log(res);
  };
  return (
    <div>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-3xl font-bold">Login</h1>
        <input
          type="email"
          {...login("email", { required: true })}
          placeholder="Email"
          className=""
        />
        <input
          type="password"
          {...login("password", { required: true, minLength: 8 })}
          placeholder="Password"
          className=""
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
