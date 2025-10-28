import { Link, useNavigate } from "react-router-dom";
import { LabelledInput } from "./LabelledInput";
import { useState } from "react";
import axios from "axios";
import type { SignupInput } from "@pandey-prince/medium-common";
import { BACKEND_URL } from "../config";
export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  async function sendRequest() {
    try {
      console.log("postinputs", postInputs);
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type == "signup" ? "signup" : "signin"}`,
        postInputs
      );
      const jwt = response.data;
      console.log(jwt);
      localStorage.setItem("token", jwt.jwt);
      navigate("/blogs");
    } catch (e) {
      console.log("error", e);
      alert("wrong inputs");
    }
  }
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center  ">
        <div>
          <div className="px-10">
            <div className="text-3xl font-extrabold">Create an account</div>
            <div className="text-slate-500">
              {type == "signin"
                ? "Don't have account?"
                : "Already have an account?"}
              <Link
                className="pl-2 underline"
                to={type == "signup" ? "/signin" : "/signup"}
              >
                {type == "signin" ? "sign up" : "signin"}
              </Link>
            </div>
          </div>
          <div className="pt-4">
            {type == "signup" && (
              <LabelledInput
                label="Name"
                placeholder="Enter your name"
                onChange={(e) => {
                  setPostInputs((c) => ({ ...c, name: e.target.value }));
                }}
              />
            )}
            <LabelledInput
              label="Email"
              placeholder="abc@example.com"
              onChange={(e) => {
                setPostInputs((c) => ({ ...c, email: e.target.value }));
              }}
            />
            <LabelledInput
              label="Password"
              placeholder="Enter your password"
              type="password"
              onChange={(e) => {
                setPostInputs((c) => ({ ...c, password: e.target.value }));
              }}
            />
          </div>

          <button
            onClick={sendRequest}
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 w-full py-2.5 me-2 mb-2 mt-5 "
          >
            {type == "signup" ? "Sign up" : "Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};
