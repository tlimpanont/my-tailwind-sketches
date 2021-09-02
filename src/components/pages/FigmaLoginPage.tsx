import React, { FC } from "react";
import OutlineButton from "../OutlineButton";

const FigmaLoginPage: FC<any> = () => {
  return (
    <>
    <div className="flex flex-col justify-center sm:items-left mx-8 mt-8">
      <a href='https://www.figma.com/'>
        <svg className="svg" width="38" height="57" viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 28.5c0-5.247 4.253-9.5 9.5-9.5 5.247 0 9.5 4.253 9.5 9.5 0 5.247-4.253 9.5-9.5 9.5-5.247 0-9.5-4.253-9.5-9.5z" fillRule="nonzero" fillOpacity="1" fill="#1abcfe" stroke="none"/>
          <path d="M0 47.5C0 42.253 4.253 38 9.5 38H19v9.5c0 5.247-4.253 9.5-9.5 9.5C4.253 57 0 52.747 0 47.5z" fillRule="nonzero" fillOpacity="1" fill="#0acf83" stroke="none"/>
          <path d="M19 0v19h9.5c5.247 0 9.5-4.253 9.5-9.5C38 4.253 33.747 0 28.5 0H19z" fillRule="nonzero" fillOpacity="1" fill="#ff7262" stroke="none"/>
          <path d="M0 9.5C0 14.747 4.253 19 9.5 19H19V0H9.5C4.253 0 0 4.253 0 9.5z" fillRule="nonzero" fillOpacity="1" fill="#f24e1e" stroke="none"/>
          <path d="M0 28.5C0 33.747 4.253 38 9.5 38H19V19H9.5C4.253 19 0 23.253 0 28.5z" fillRule="nonzero" fillOpacity="1" fill="#a259ff" stroke="none"/></svg>
      </a>
    </div>
    <div className="w-2/5 mx-auto mt-20">
    <div className="flex flex-col">
      <OutlineButton btnText="Signin with Google" icon="google" />
      <p className="flex flex-col items-center mt-4 text-gray-500">or</p>
      <form>
            <input
              type="text"
              className="p-3 mt-4 w-full rounded block border-black border-2"
              placeholder="your email"
            />
            <input
              type="password"
              className="p-3 mt-4 w-full rounded block border-black border-2"
              placeholder="your password"
            />
            <button className="bg-black font-bold text-white px-2 py-4 rounded-lg mt-4 w-full">
              Login
            </button>
            <a href='#' className='flex flex-col items-center mt-4 text-indigo-400'>Log in with SAML SSO</a>
            <a href='#' className='flex flex-col items-center mt-4 text-indigo-400'>Forgot password?</a>
            <p className='text-gray-500 text-center mt-4'>No account?<a href='#' className=' text-indigo-400 ml-1'>Create one</a></p>
            <p className='text-xs text-gray-500 text-center mt-5'>This site is protected by reCAPTCHA and the Google <a href='#' className=' text-indigo-400 ml-1'>Privacy Policy</a>and <a href='#' className=' text-indigo-400 ml-1'>Terms of Service</a>apply.</p>        
          </form>
    </div>
    </div>
    </>
  );
};

export default FigmaLoginPage;
