import React, { FC } from "react";

const DropboxLoginPage: FC<unknown> = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="border-b-2 border-gray-300 w-full">
        <div className="flex flex-row justify-around py-6 items-center">
          <button  className="hidden sm:block rounded-md border-blue-500 border-2 px-4 py-2 text-blue-500 font-bold text-sm">
            Try Dropbox Business
          </button>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Dropbox_Logo_01.svg/1200px-Dropbox_Logo_01.svg.png"
            className="w-5/12 sm:w-1/12"
            alt
          />
          <a href="#" className="hidden sm:block  text-blue-500 text-sm">
            {" "}
            Download the app
          </a>
        </div>
      </div>
      <div className="lg:w-2/4 w-full px-10 lg:px-0 flex flex-row items-center gap-28 mt-8 sm:mt-20">
        <section className="hidden sm:block">
          <img
            src="https://cfl.dropboxstatic.com/static/images/empty_states/sign-in-boulder%402x-vfl87XcA-.png"
            alt
          />
        </section>
        <section className="w-full px-0">
          <div className="hidden sm:flex flex-row justify-between mb-8 items-center">
            <h1 className="text-lg">Sign in</h1>
            <div className="text-sm">
              <span>or</span>{" "}
              <span className="text-blue-500">create an account</span>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <button className="bg-blue-500 social-btn-outer border-r-2">
              <div className="bg-blue-500 social-btn-inner">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              Sign in with Google
            </button>
            <button className="bg-black social-btn-outer">
              <div className="bg-black social-btn-inner">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              Sign in with Apple
            </button>
            <div className="w-full border-b-2 border-gray-200 relative my-4">
              <div className="absolute left-1/2 -mt-5 -ml-4 bg-white p-2 text-gray-700 ">
                or
              </div>
            </div>
            <input type="text" className="text-input" placeholder="Email" />
            <input
              type="password"
              placeholder="Password"
              className="text-input"
            />
            <div className="flex sm:flex-row flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
              <input
                id="rememberme"
                type="checkbox"
                className="form-checkbox rounded-sm"
              />{" "}
              <label htmlFor="rememberme" className="text-sm">
                Remember me
              </label>
              </div>
              <div className="flex-1" />
              <button className="bg-blue-500 text-white px-6 rounded-sm py-2">
                Sign in
              </button>
            </div>
            <a href="#" className="text-sm text-blue-500 -mt-2">
              Forgot your password?
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DropboxLoginPage;
