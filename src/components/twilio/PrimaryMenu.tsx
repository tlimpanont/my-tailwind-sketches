import { Popover } from "@headlessui/react";
import React, { FC, HTMLProps, useRef } from "react";
import PrimaryMenuPanel, { PrimaryMenuPanelProps } from "./PrimaryMenuPanel";
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";
import { Drop } from "grommet";

export type PrimaryMenuProps = {
  items: {
    title: string;
    panelColumns: PrimaryMenuPanelProps["columns"];
  }[];
};
const PrimaryMenu: FC<HTMLProps<HTMLDivElement> & PrimaryMenuProps> = ({
  items,
  className,
  ...rest
}) => {
  return (
    <Popover.Group
      className={`h-16 flex-row gap-x-12 pt-6 ${className}`}
      {...rest}
      as={"div"}
    >
      {items.map(({ title, panelColumns }) => {
        return (
          <Popover as={"div"} key={uuidv4()}>
            {({ open }) => {
              const popoverClassNames = classNames({
                "text-blue-500 border-b-blue-500 border-b-2": open,
                "hover:text-blue-500 hover:border-b-blue-500 hover:border-b-2": !open,
                "active:text-blue-900 active:border-b-blue-900 active:border-b-2 pb-7 transition-color duration-100":
                  open || !open,
              });

              const targetRef = useRef<any>();
              return (
                <>
                  <Popover.Button
                    as={"button"}
                    className={popoverClassNames}
                    ref={targetRef}
                  >
                    {title}
                  </Popover.Button>
                  {open && (
                    <>
                      <Popover.Panel static>
                        <Drop
                          align={{
                            top: "bottom",
                            bottom: "bottom",
                          }}
                          target={targetRef.current}
                        >
                          <PrimaryMenuPanel columns={panelColumns} />
                        </Drop>
                      </Popover.Panel>
                    </>
                  )}
                </>
              );
            }}
          </Popover>
        );
      })}
    </Popover.Group>
  );
};

export default PrimaryMenu;
