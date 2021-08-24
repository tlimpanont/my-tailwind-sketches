import React, { FC } from "react";

const AirbnbLoginPage: FC<unknown> = () => (
  <div className="flex flex-col">
    <div className="flex flex-row py-4 px-10 items-center shadow-lg">
      <div>
        <img
          className="w-3/12"
          src="https://lacalaboatours.com/wp-content/uploads/2020/03/airbnb.png"
          alt
        />
      </div>
      <div className="flex-1" />
      <div className="flex flex-row gap-6 items-center">
        <a href="#">Become a host</a>
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
              <a href className="underline text-black">
                Privacy Policy
              </a>
            </p>
            <button className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 rounded-lg mt-2 mb-4">
              Continue
            </button>
            <div className="flex flex-row justify-center border-b-2 border-gray-200 relative">
              <div className="text-xs bg-white absolute -mt-4 p-2 text-gray-500">
                or
              </div>
            </div>
            <div className="flex-1" />
            <div className="flex flex-row justify-center items-center rounded-lg border-2 border-gray-400 relative">
              <div className="absolute left-4">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  style={{
                    height: 20,
                    width: 20,
                    display: "block",
                    fill: "currentColor",
                  }}
                >
                  <defs>
                    <path id="a" d="M.001 0H24v23.854H.001z" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <mask id="b" fill="#fff">
                      <use xlinkHref="#a" />
                    </mask>
                    <path
                      d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12"
                      fill="#1877F2"
                      mask="url(#b)"
                    />
                    <path
                      d="M16.671 15.469L17.203 12h-3.328V9.749c0-.949.465-1.874 1.956-1.874h1.513V4.922s-1.374-.234-2.686-.234c-2.741 0-4.533 1.66-4.533 4.668V12H7.078v3.469h3.047v8.385a12.09 12.09 0 003.75 0V15.47h2.796"
                      fill="#FFF"
                    />
                  </g>
                </svg>
              </div>
              <button className="text-black py-3">
                Continue with Facebook
              </button>
            </div>
            <div className="flex flex-row justify-center items-center rounded-lg border-2 border-gray-400 relative">
              <div className="absolute left-4">
                <svg
                  viewBox="0 0 18 18"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  style={{ height: 20, width: 20, display: "block" }}
                >
                  <g fill="none" fillRule="evenodd">
                    <path
                      d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"
                      fill="#EA4335"
                    />
                    <path
                      d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"
                      fill="#4285F4"
                    />
                    <path
                      d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"
                      fill="#34A853"
                    />
                    <path d="M0 0h18v18H0V0z" />
                  </g>
                </svg>
              </div>
              <button className="text-black py-3">
                Continue with Facebook
              </button>
            </div>
            <div className="flex flex-row justify-center items-center rounded-lg border-2 border-gray-400 relative">
              <div className="absolute left-4">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  style={{
                    height: 20,
                    width: 20,
                    display: "block",
                    fill: "currentColor",
                  }}
                >
                  <path d="m13.3 2.1a5.1 5.1 0 0 1 3.8-2.1 5.1 5.1 0 0 1 -1.2 3.8 4.1 4.1 0 0 1 -3.6 1.7 4.5 4.5 0 0 1 1-3.4zm-5 3.7c-2.8 0-5.8 2.5-5.8 7.3 0 4.9 3.5 10.9 6.3 10.9 1 0 2.5-1 4-1s2.6.9 4 .9c3.1 0 5.3-6.4 5.3-6.4a5.3 5.3 0 0 1 -3.2-4.9 5.2 5.2 0 0 1 2.6-4.5 5.4 5.4 0 0 0 -4.7-2.4c-2 0-3.5 1.1-4.3 1.1-.9 0-2.4-1-4.2-1z" />
                </svg>
              </div>
              <button className="text-black py-3">Continue with Apple</button>
            </div>
            <div className="flex flex-row justify-center items-center rounded-lg border-2 border-gray-400 relative">
              <div className="absolute left-4">
                <svg
                  viewBox="0 0 24 24"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  style={{
                    height: 20,
                    width: 20,
                    display: "block",
                    fill: "currentColor",
                  }}
                >
                  <path
                    d="m22.5 4h-21c-.83 0-1.5.67-1.5 1.51v12.99c0 .83.67 1.5 1.5 1.5h20.99a1.5 1.5 0 0 0 1.51-1.51v-12.98c0-.84-.67-1.51-1.5-1.51zm.5 14.2-6.14-7.91 6.14-4.66v12.58zm-.83-13.2-9.69 7.36c-.26.2-.72.2-.98 0l-9.67-7.36h20.35zm-21.17.63 6.14 4.67-6.14 7.88zm.63 13.37 6.3-8.1 2.97 2.26c.62.47 1.57.47 2.19 0l2.97-2.26 6.29 8.1z"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <button className="text-black py-3">Continue with email</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AirbnbLoginPage;
