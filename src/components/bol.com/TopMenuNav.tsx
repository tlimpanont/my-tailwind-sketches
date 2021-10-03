import React, { FC, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";
import { Transition } from "react-transition-group";

export type TopMenuNavProps = {
  menuItems: {
    title: string;
    categories: {
      title: string;
      items: {
        title: string;
      }[];
    }[];
    subMenuItems: {
      title: string;
      categories: {
        title: string;
        items: {
          title: string;
        }[];
      }[];
    }[];
  }[];
};

const TopMenuNav: FC<TopMenuNavProps> = ({ menuItems }) => {
  const targetRef = useRef<any>();

  const [selectedMenuItem, setSelectedMenuItem] = useState<
    TopMenuNavProps["menuItems"][number]
  >();

  const [selectedSubMenuItem, setSelectedSubMenuItem] = useState<
    TopMenuNavProps["menuItems"][number]["subMenuItems"][number]
  >();

  return (
    <>
      <nav
        ref={targetRef}
        onMouseLeave={() => {
          setSelectedMenuItem(undefined);
          setSelectedSubMenuItem(undefined);
        }}
      >
        <ul
          className={
            "z-50 pl-4 text-sm flex flex-row items-center border-gray-200 border-b-2 space-x-8"
          }
        >
          {menuItems.map(({ title }, index) => {
            return (
              <li
                key={uuidv4()}
                className={classNames(
                  " cursor-pointer border-b-4  hover:border-b-[#0000a4] py-3 flex flex-row items-center space-x-2",
                  {
                    "border-b-[#0000a4]": menuItems[index] === selectedMenuItem,
                    "border-b-transparent":
                      menuItems[index] !== selectedMenuItem,
                  }
                )}
                onMouseEnter={() => {
                  setSelectedMenuItem(menuItems[index]);
                }}
              >
                <span>{title} </span>
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
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </li>
            );
          })}
        </ul>
        <div
          className={classNames(
            "flex flex-row bg-white w-full h-auto h-auto z-50",
            {
              "absolute py-4": selectedMenuItem?.subMenuItems.length,
            }
          )}
          onMouseLeave={() => {
            setSelectedMenuItem(undefined);
            setSelectedSubMenuItem(undefined);
          }}
        >
          {selectedMenuItem?.subMenuItems.length ? (
            <>
              <ul className={"text-sm w-72"}>
                {selectedMenuItem?.subMenuItems.map(({ title }, index) => {
                  const className = classNames(
                    " cursor-pointer px-1 ml-4 space-x-8  flex flex-row  items-center py-2 ",
                    {
                      "hover:bg-[#f0f6ff]":
                        selectedMenuItem?.subMenuItems[index] !==
                        selectedSubMenuItem,
                      "bg-[#f0f6ff]":
                        selectedMenuItem?.subMenuItems[index] ===
                        selectedSubMenuItem,
                    }
                  );
                  return (
                    <li
                      onMouseEnter={() =>
                        setSelectedSubMenuItem(
                          selectedMenuItem?.subMenuItems[index]
                        )
                      }
                      key={uuidv4()}
                      className={className}
                    >
                      <span>{title}</span>
                      <div className="flex-1" />
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
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </li>
                  );
                })}
              </ul>
              <div className={"ml-8 grid grid-cols-3 text-sm gap-x-12 gap-y-8"}>
                {selectedSubMenuItem?.categories.map(({ title, items }) => {
                  return (
                    <div key={uuidv4()}>
                      <h3 className={"font-semibold"}>{title}</h3>
                      <ul>
                        {items.map(({ title }) => {
                          return (
                            <li
                              key={uuidv4()}
                              className={" cursor-pointer py-1"}
                            >
                              {title}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div
              className={classNames(
                "w-full bg-white pl-4 grid grid-cols-3 text-sm gap-x-8 gap-y-8  z-50",
                {
                  "absolute py-4": selectedMenuItem?.categories.length,
                }
              )}
            >
              {selectedMenuItem?.categories.map(({ title, items }) => {
                return (
                  <div key={uuidv4()}>
                    <h3 className={"font-semibold"}>{title}</h3>
                    <ul>
                      {items.map(({ title }) => {
                        return (
                          <li key={uuidv4()} className={"cursor-pointer py-1"}>
                            {title}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </nav>
      <Fade in={selectedMenuItem}>
        <div className="fixed w-screen h-screen bg-black opacity-60 z-0"></div>
      </Fade>
    </>
  );
};

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles: any = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const Fade = ({ in: inProp, children }: any) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        {children}
      </div>
    )}
  </Transition>
);
export default TopMenuNav;
