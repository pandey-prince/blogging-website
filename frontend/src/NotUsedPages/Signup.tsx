import { useState } from "react";
export const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex justify-center h-full ">
      <div className="flex flex-row  w-full h-full ">
        <div
          className=" w-3xl px-10 py-30 bg-white
        "
        >
          <div className=" text-center">
            <h2 className="font-bold text-3xl text-center">
              Create an account
            </h2>
            <p className="text-gray-600">
              Already have an account?
              <button className="border-b-gray-600 border-b">
                Signin
              </button>
            </p>
          </div>
          <div className=" flex flex-col justify-center ">
            <div className=" text-lg font-semibold px-10 mb-4">
              <label htmlFor="username">Username </label> <br />
              <input
                className="border-gray-500 border w-full py-1 rounded-md font-normal"
                value={username}
                type="text"
                id="username"
                placeholder="Enter username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className=" text-lg font-semibold px-10 mb-4">
              <label htmlFor="email">Email</label>
              <br />
              <input
                className="border-gray-500 border w-full py-1 rounded-md font-normal"
                value={email}
                type="email"
                id="email"
                placeholder="Enter your mail"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="text-lg font-semibold px-10 mb-4">
              <label htmlFor="password">Password</label> <br />
              <input
                className="border-gray-500 border w-full py-1 rounded-md font-normal"
                value={password}
                type="password"
                id="password"
                placeholder="Enter your password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="px-10 ">
              <button className="bg-black  text-white font-bold px-52 py-2 rounded-md text-lg cursor-pointer">
                Signup
              </button>
            </div>
          </div>
        </div>
        <div className=" bg-gray-400  h-full py-55.5 px-15 text-2xl w-3xl">
          <div className="font-bold ">
            The customer Service I received was exceptional. The Support team
            went above and beyond to address my concerns.
          </div>
          <div className=" ">
            <p>Jules Winnfield</p>
            <p>Ceo,Acme Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
