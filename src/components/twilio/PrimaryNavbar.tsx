import React, { FC, HTMLProps, useRef, useState } from "react";
import PrimaryMenu, { PrimaryMenuProps } from "./PrimaryMenu";
import { Drop } from "grommet";
import classNames from "classnames";

const PrimaryNavbar: FC<
  HTMLProps<HTMLDivElement> & { primaryMenu: PrimaryMenuProps }
> = ({ primaryMenu }) => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const targetRef = useRef<any>();
  return (
    <div
      className={
        "flex flex-row items-center border-b-2 border-gray-200 px-4 sm:px-8 h-20"
      }
    >
      <img
        src="https://www.twilio.com/docs/static/dist/img/559bc7cf.svg"
        alt="twiliologo"
        className={"w-24 sm:w-32"}
      />
      <div className={"flex-1"} />
      <PrimaryMenu {...primaryMenu} className={"hidden lg:flex"} />
      <div className={"flex-1"} />
      <div className={"space-x-2"}>
        <button
          className={
            "hidden lg:inline py-2 px-4 border-2 border-blue-600 rounded-lg"
          }
        >
          Talk to an expert
        </button>
        {!menuActive && (
          <button
            className={
              "py-2 px-4 border-2 border-blue-600  rounded-lg bg-blue-600 text-white"
            }
          >
            Sign up
          </button>
        )}
        <button
          onClick={(e) => {
            setMenuActive(!menuActive);
          }}
          ref={targetRef}
          className={classNames({
            "lg:hidden py-2 px-4 border-2 border-blue-600  rounded-lg text-blue-600": !menuActive,
            "lg:hidden py-2 border-2  border-transparent  rounded-lg text-gray-900": menuActive,
          })}
        >
          {!menuActive ? (
            <span
              onClick={(e) => {
                e.stopPropagation();
                setMenuActive(true);
              }}
            >
              Menu
            </span>
          ) : (
            <svg
              onClick={() => setMenuActive(false)}
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          )}
        </button>
        <Drop
          style={{ position: "static" }}
          elevation={"none"}
          align={{
            top: "bottom",
            bottom: "top",
          }}
          target={targetRef.current}
        >
          <nav
            className={classNames({
              hidden: !menuActive,
            })}
          >
            {primaryMenu.items.map(({ title }) => {
              return (
                <div
                  className={
                    "justify-between flex px-4 py-4 border-b-2 border-gray-100 w-screen"
                  }
                >
                  <div>{title}</div>
                  <div>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              );
            })}
          </nav>
        </Drop>
      </div>
    </div>
  );
};

export default PrimaryNavbar;
