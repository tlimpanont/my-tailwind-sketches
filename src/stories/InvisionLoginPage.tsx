import React, { FC } from "react";

const InvisionLoginPage: FC<unknown> = () => {
  return (
    <>
      <div className="flex flex-row">
        <div
          className="hidden w-1/3 text-center lg:flex flex-col items-center justify-center h-screen bg-gray-800 bg-blend-multiply text-white p-10 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80")',
          }}
        >
          <div className="absolute left-0 top-0 p-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>
          </div>
          <div className="flex-1"></div>
          <h4 className="text-sm">Invision Enterprise Edition</h4>
          <h1 className="text-2xl mt-2">
            The Design collaboration cloud for larger teams
          </h1>
          <h2 className="text-md text-gray-400 my-8">
            Unlimited team members. Unlimited projects. Unlimited creativity
          </h2>
          <button className="rounded-md bg-blue-800 px-4 py-1">
            Schdule a demo
          </button>
          <div className="flex-1"></div>
          <div className="px-20 uppercase text-xs text-gray-400">
            Trusted by the world's smartest companies
            <div className="flex flex-row mt-4 gap-10 w-full justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center h-screen">
          <div className="absolute top-0 sm:right-0 px-8 py-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="sm:hidden h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>
            <div className="sm:flex flex-row items-center gap-4 hidden">
              <span className="text-xs">Don't have an account?</span>
              <button className="border-2 border-gray-300 rounded-md px-4 py-1">
                Get started
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-6/12 px-8  self-center">
            <div className="mb-4">
              <h1 className="text-3xl">Sign in to InVision</h1>
              <h4>Enter your details below</h4>
            </div>
            <label for="email">Email address</label>
            <input id="email" type="text" className="rounded-md py-3" />
            <a href="#" className="text-xs text-blue-500">
              Know your team domain?
            </a>
            <div className="mt-2" />
            <div className="flex flex-row justify-between items-center ">
              <label for="password">Password</label>
              <a href="#" className="text-xs text-gray-700">
                Forgot password?
              </a>
            </div>
            <a href="#" className="text-xs text-gray-700">
              <input id="password" type="password" className="rounded-md w-full py-3" />
              <div className="flex flex-row justify-center mt-8">
                <button className="btn-primary px-6 py-3 rounded-md text-white text-sm">
                  Sign in
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvisionLoginPage;
