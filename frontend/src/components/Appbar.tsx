import { Avatar } from "./Avatar";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../hooks";

export const Appbar = () => {
  const loggedIn = isLoggedIn();
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link to={"/blogs"}>
        <div className=" px-2 text-3xl text-gray-900 font-semibold">Medium</div>
      </Link>
      {!loggedIn && <div></div>}

      <div>
        {!loggedIn && (
          <>
            <Link to={"/signin"}>
              <button
                type="button"
                className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
              >
                Signin
              </button>{" "}
            </Link>
            <Link to={"/Signup"}>
              <button
                type="button"
                className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
              >
                Signup
              </button>{" "}
            </Link>
          </>
        )}
        {loggedIn && (
          <>
            {" "}
            <Link to={"/publish"}>
              <button
                type="button"
                className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
              >
                Create New Blog
              </button>{" "}
            </Link>
            <Link to={"/Signin"}>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                }}
                type="button"
                className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
              >
                Logout
              </button>{" "}
            </Link>
          </>
        )}
        <Avatar authorName="prince" />
      </div>
    </div>
  );
};
