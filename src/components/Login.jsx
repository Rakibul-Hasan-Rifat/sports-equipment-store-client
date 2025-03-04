import { Link } from "react-router";

const Login = () => {
  return (
    <div className="mx-auto my-8 p-8 w-1/2 flex flex-col gap-5 items-center border border-gray-300 rounded-xl">
      <h2 className="text-4xl font-semibold text-center">Login</h2>
      <form className="flex flex-col gap-4 w-full mx-auto">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-3 rounded w-full outline-0 border border-gray-200"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-3 rounded w-full outline-0 border border-gray-200"
        />
        <button className="btn">Login</button>
      </form>
      <p className="w-full text-right">
              <span>Don't have an account? Please </span>
              <Link to={'/register'} className="font-semibold border-b pb-0.5">Register</Link>
      </p>
    </div>
  );
};

export default Login;
