import React, { FC } from "react";

const PayPalLoginPage: FC<unknown> = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="border-2 border-gray-100 rounded-md w-full sm:w-3/6 p-8 shadow-2xl">
        <div className="flex flex-col items-center">
          <img
            src="https://www.chrisvanburen.com/wp-content/uploads/2016/12/paypal-logo.png"
            className="w-1/3 p-0 m-0 mb-8"
          />
          <input
            type="text"
            className="block rounded w-full"
            placeholder="Email or mobile number"
          />
          <button className="bg-blue-600 font-bold text-white p-2 rounded-md my-5 w-full hover:bg-blue-900 transition">
            Next
          </button>
          <div className="divide-y-2 divide-gray-300 divide-dotted">
            <div>or</div>
            <div>&nbsp;</div>
          </div>
          <button className="bg-gray-400 font-bold p-2 rounded-md  w-full active::bg-indigo-500">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayPalLoginPage;
