import {Popover} from "@headlessui/react";
import React, {FC, HTMLProps} from "react";
import PrimaryMenuPanel, {PrimaryMenuPanelProps} from "./PrimaryMenuPanel";
import classNames from 'classnames'


export type PrimaryMenuProps = {
    items: {
        title: string
        panelColumns: PrimaryMenuPanelProps['columns']
    }[]
}
const PrimaryMenu: FC<HTMLProps<HTMLDivElement> & PrimaryMenuProps> = ({items, className, ...rest}) => {
    return (
        <Popover.Group className={`h-16 flex-row gap-x-12 relative pt-6 ${className}`} {...rest} as={"div"}>
            {items.map(({title, panelColumns}, index) => {
                return <Popover as={"div"} key={Math.random() * index}>
                    {({open}) => {
                        const popoverClassNames = classNames({
                            'text-blue-500 border-b-blue-500 border-b-2': open,
                            'hover:text-blue-500 hover:border-b-blue-500 hover:border-b-2': !open,
                            'active:text-blue-900 active:border-b-blue-900 active:border-b-2 pb-7 transition-color duration-100 text-lg ': open || !open
                        });


                        return <>
                            <Popover.Button as={"button"}
                                            className={popoverClassNames}>{title}</Popover.Button>
                            {open &&
                            <>
                                <Popover.Panel static className={`absolute -left-1/2`}>
                                    <PrimaryMenuPanel columns={panelColumns}/>
                                </Popover.Panel>
                            </>
                            }
                        </>
                    }}
                </Popover>
            })}
        </Popover.Group>

    );
};

export default PrimaryMenu;
