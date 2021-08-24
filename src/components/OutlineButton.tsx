import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";

export type IconsForButton = "google" | "facebook" | "email" | "apple";

const iconsMap: Map<IconsForButton, JSX.Element | ReactNode> = new Map([
  [
    "email",
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
    </svg>,
  ],
  [
    "apple",
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
    </svg>,
  ],
  [
    "google",
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
    </svg>,
  ],
  [
    "facebook",
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
    </svg>,
  ],
]);

export type OutlineButtonProps = {
  icon: IconsForButton | JSX.Element | ReactNode;
  btnText: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const OutlineButton: FC<OutlineButtonProps> = ({ btnText, icon, ...rest }) => {
  return (
    <button
      {...rest}
      className="flex flex-row justify-center items-center rounded-lg border-2 border-gray-400 relative hover:border-black"
    >
      <span className="absolute left-4">
        {icon && iconsMap.get(icon as any) ? iconsMap.get(icon as any) : icon}
      </span>
      <span className="text-black py-3">{btnText}</span>
    </button>
  );
};

export default OutlineButton;
