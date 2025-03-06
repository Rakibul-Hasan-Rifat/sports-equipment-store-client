import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { register, updateUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const { name, email, photo, password } = Object.fromEntries(
      new FormData(e.target).entries()
    );

    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6}$/;
    
    regex.test(password)
      ? register(email, password)
          .then((result) => {
            console.log("from register", result.user);
            toast.success("User created successfully!!👌👌");
            updateUser(name, photo)
              .then(() => {
                toast.success("User's profile is updated too. 😍😍");
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => {
            console.log(err);
          })
      : toast.error(
          "Password should have at least 6 charecters with at least 1 uppercase and 1 lowercase"
        );
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="mx-auto my-8 p-8 w-1/2 flex flex-col gap-5 items-center border border-gray-300 rounded-xl">
        <h2 className="text-4xl font-semibold text-center">Register</h2>
        <form
          onSubmit={handleRegister}
          className="flex flex-col gap-4 w-full mx-auto"
        >
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
    </>
  );
};

export default Register;
