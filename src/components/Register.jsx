import { Link } from "react-router";

const Register = () => {
  return (
    <div className="mx-auto my-8 p-8 w-1/2 flex flex-col gap-5 items-center border border-gray-300 rounded-xl">
      <h2 className="text-4xl font-semibold text-center">Register</h2>
      <form className="flex flex-col gap-4 w-full mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="p-3 rounded w-full outline-0 border border-gray-200"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-3 rounded w-full outline-0 border border-gray-200"
        />
        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          className="p-3 rounded w-full outline-0 border border-gray-200"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-3 rounded w-full outline-0 border border-gray-200"
        />
        <button className="btn">Register</button>
      </form>
      <p className="w-full text-right">
        <span>Already have an account? Please </span>
        <Link to={"/login"} className="font-semibold border-b pb-0.5">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
