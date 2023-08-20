import React, { useState } from "react";
import { PASSWORD, USERNAME } from "../lib/constants";

function UsernamePasswordDialog({ isOpen, onClose, onAuthenticate }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    if (isError) {
      setIsError(false);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (isError) {
      setIsError(false);
    }
  };

  const handleSubmit = () => {
    if (username === USERNAME && password === PASSWORD) {
      onAuthenticate();
    } else {
      setIsError(true);
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="logo-mark.svg"
            alt="SmartCommerce"
          />
          <h2 className="mt-8 text-center text-xl text-slate-950 font-semibold">
            Sign in to Pricing Calculator
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  required
                  className="w-full p-2 rounded-md border border-gray-300 border-gray-300 focus:ring focus:ring-primary-950"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  required
                  className="block w-full rounded-md p-2 border border-gray-300 focus:ring focus:ring-primary-950"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              {isError && (
                <span className="text-red-500">
                  Username or Password is wrong
                </span>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary-950 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleSubmit}
              >
                Sign in
              </button>
            </div>
          </form>
          <style>{"body { background-color: #f5f5f7; }"}</style>
        </div>
      </div>
    </div>
  );
}
export default UsernamePasswordDialog;
