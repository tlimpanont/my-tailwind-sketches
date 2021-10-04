import React, { FC, useState } from "react";
import { PrimaryMenuProps } from "./PrimaryMenu";
import { PrimaryMenuPanelProps } from "./PrimaryMenuPanel";
import { Box, Button, Layer } from "grommet";
import PrimaryMenuItem from "./PrimaryMenuItem";
import { v4 as uuidv4 } from "uuid";

const MobilePrimaryMenu: FC<{ primaryMenu: PrimaryMenuProps }> = ({
  primaryMenu,
}) => {
  const [selectedPrimaryMenuItem, setSelectedMenuItem] = useState<{
    title: string;
    panelColumns: PrimaryMenuPanelProps["columns"];
  }>();

  return (
    <div className={"block lg:hidden"}>
      {selectedPrimaryMenuItem && (
        <Layer
          full={"horizontal"}
          position={"left"}
          modal={true}
          onEsc={() => setSelectedMenuItem(undefined)}
        >
          <Box overflow={"auto"} className={"pb-4"}>
            <div
              className={
                "bg-gray-200 flex flex-row items-center px-4 py-4 fixed w-full"
              }
            >
              <h2 className={"w-full text-blue-500 font-bold"}>
                {selectedPrimaryMenuItem.title}
              </h2>
              <Button
                aria-label="Close"
                onClick={() => setSelectedMenuItem(undefined)}
                plain
                icon={
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
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                }
              />
            </div>
            <div className={"px-8 mt-12"}>
              {selectedPrimaryMenuItem.panelColumns.map(
                ({ title, items }, index) => {
                  return (
                    <div key={uuidv4()} className={"space-y-4"}>
                      <h3
                        className={
                          "text-sm border-b-2 font-bold border-gray-200 pb-4 my-8"
                        }
                      >
                        {title}
                      </h3>
                      {items.map(
                        ({ icon, title, description, callToActions }) => {
                          return (
                            <PrimaryMenuItem
                              icon={icon}
                              title={title}
                              description={description}
                              key={uuidv4()}
                              callToActions={callToActions}
                            />
                          );
                        }
                      )}
                    </div>
                  );
                }
              )}
            </div>
          </Box>
        </Layer>
      )}

      {primaryMenu.items.map((item, index) => {
        const { title, panelColumns } = item;
        return (
          <div
            role={"button"}
            key={uuidv4()}
            onClick={() => setSelectedMenuItem(item)}
            className={
              "cursor-pointer justify-between items-center flex px-4 py-4 border-b-2 border-gray-100 w-screen"
            }
          >
            <div>{title}</div>
            <div>
              <Button
                aria-label="Open menuitem"
                plain
                icon={
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
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                }
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MobilePrimaryMenu;
