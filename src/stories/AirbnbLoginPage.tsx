import React, { FC } from "react";
import OutlineButton from "../components/OutlineButton";

const AirbnbLoginPage: FC<unknown> = () => (
  <div className="flex flex-col">
    <div className="flex flex-row py-4 px-10 items-center shadow-lg">
      <div>
        <img
          className="w-3/12"
          src="https://lacalaboatours.com/wp-content/uploads/2020/03/airbnb.png"
          alt={"airbnblogo"}
        />
      </div>
      <div className="flex-1" />
      <div className="flex flex-row gap-6 items-center">
        <a href="#">Become a host</a>
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
        <button className="relative gap-3 py-1 px-2 flex flex-row border-2 border-gray-200 rounded-full items-center">
          <div className="absolute right-1 top-0 rounded-full bg-pink-600 border-2 border-white w-4 h-4" />
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            className="w-8 h-8 text-gray-500"
            fill="#eee"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div className="flex flex-row justify-center">
      <div className="max-w-96 mt-20 border-2 border-gray-300 rounded-lg">
        <div className="border-b-2 border-gray-200 p-4">
          <h3 className="text-center font-bold">Log in or signup</h3>
        </div>
        <div className="p-8">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl mb-2">Welcome to Airbnb</h1>
            <div className="relative">
              <select className="relative w-full form-select rounded-t-lg pt-6 border-b-0 pb-3 border-gray-400">
                <option selected>Netherlands</option>
              </select>
              <label className="absolute top-3 left-3 text-gray-400 text-xs">
                Country/Region
              </label>
            </div>
            <input
              type="text"
              className="form-input rounded-b-lg py-4 -mt-3 border-gray-400"
              placeholder="Phone number"
            />
            <p className="text-xs text-gray-500">
              We’ll call or text you to confirm your number. Standard message
              and data rates apply.{" "}
              <a href={"#"} className="underline text-black">
                Privacy Policy
              </a>
            </p>
            <button className="transition hover:opacity-90 bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 rounded-lg mt-2 mb-4">
              Continue
            </button>
            <div className="flex flex-row justify-center border-b-2 border-gray-200 relative mb-1">
              <div className="bg-white absolute -mt-5 p-2 text-gray-500">
                or
              </div>
            </div>
            <div className="flex-1" />
            <OutlineButton btnText="Signin with Facebook" icon="facebook" />
            <OutlineButton btnText="Signin with Google" icon="google" />
            <OutlineButton btnText="Signin with Apple" icon="apple" />
            <OutlineButton btnText="Signin with email" icon="email" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AirbnbLoginPage;
