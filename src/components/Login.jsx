import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = Object.fromEntries(
      new FormData(e.target).entries()
    );

    login(email, password).then((result) => {
      console.log("from register", result.user);
      toast.success("User logged in successfully!!👌👌");
    });
  };

  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      console.log("from google login", result.user);
      toast.success("User logged in successfully by Google!!👌👌");
    });
  };

  return (
    <>
      <Toaster />
      <div className="mx-auto my-8 p-8 w-1/2 flex flex-col gap-5 items-center border border-gray-300 rounded-xl">
        <h2 className="text-4xl font-semibold text-center">Login</h2>
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4 w-full mx-auto"
        >
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
          <Link to={"/register"} className="font-semibold border-b pb-0.5">
            Register
          </Link>
        </p>
        <button className="btn flex items-center" onClick={handleGoogleLogin}>
          <FcGoogle /> Google login
        </button>
      </div>
    </>
  );
};

export default Login;
