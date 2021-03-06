import React, { FC, HTMLProps } from "react";
import PrimaryMenuItem, { PrimaryMenuItemProps } from "./PrimaryMenuItem";
import { v4 as uuidv4 } from "uuid";

export type PrimaryMenuPanelProps = {
  columns: {
    title: string;
    items: PrimaryMenuItemProps[];
  }[];
};
const PrimaryMenuPanel: FC<
  HTMLProps<HTMLDivElement> & PrimaryMenuPanelProps
> = ({ columns, ...rest }) => {
  return (
    <div
      className={`w-full sm:w-auto grid grid-rows-1 grid-flow-row gap-8 sm:grid-cols-${columns.length} sm:grid-flow-col sm:gap-20 p-10 shadow-2xl`}
      {...rest}
    >
      {columns.map(({ title, items }) => {
        return (
          <div key={uuidv4()}>
            <div className="flex flex-col gap-y-6">
              <h3 className="pb-4 pl-0 border-b-2 border-gray-200 text-sm font-semibold">
                {title}
              </h3>
              {items.map(({ callToActions, description, icon, title }) => {
                return (
                  <PrimaryMenuItem
                    icon={icon}
                    title={title}
                    description={description}
                    key={uuidv4()}
                    callToActions={callToActions}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PrimaryMenuPanel;
