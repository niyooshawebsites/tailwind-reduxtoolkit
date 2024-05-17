import { useDispatch } from "react-redux";
import { useRef } from "react";
import { signupSliceActions } from "../../store/slices/SignupSlice";
import { Link } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const inputRefUsername = useRef();
  const inputRefEmail = useRef();
  const inputRefPassword = useRef();
  const sendSignupDetails = () => {
    dispatch(
      signupSliceActions.setSignupDetails({
        username: inputRefUsername.current.value,
        email: inputRefEmail.current.value,
        password: inputRefPassword.current.value,
      })
    );

    inputRefUsername.current.value = "";
    inputRefEmail.current.value = "";
    inputRefPassword.current.value = "";
  };

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            ref={inputRefUsername}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Eamil
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            ref={inputRefEmail}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            ref={inputRefPassword}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={sendSignupDetails}
          >
            Signup
          </button>
          <Link
            className="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-700"
            to="/dashboard"
          >
            Dashboard
          </Link>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2024 Niyoosha Websites. All rights reserved.
      </p>
    </div>
  );
};

export default Signup;
