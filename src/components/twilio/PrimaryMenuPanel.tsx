import React, {FC, HTMLProps} from "react";
import PrimaryMenuItem, {PrimaryMenuItemProps} from "./PrimaryMenuItem";

export type PrimaryMenuPanelProps = {
    columns: {
        title: string
        items: PrimaryMenuItemProps[]
    }[]
}
const PrimaryMenuPanel: FC<HTMLProps<HTMLDivElement> & PrimaryMenuPanelProps> = ({columns, ...rest}) => {
    return <div className={`grid grid-cols-${columns.length} grid-flow-col gap-20 p-10 shadow-2xl`} {...rest}>
        {columns.map(({title, items}, index) => {
            return <div key={Math.random() * index}>
                <div className="flex flex-col gap-y-6">
                    <h3 className="pb-4 pl-0 border-b-2 border-gray-200 text-lg font-semibold">{title}</h3>
                    {
                        items.map(({callToActions, description, icon, title}) => {
                            return <PrimaryMenuItem icon={icon} title={title} description={description}
                                                    callToActions={callToActions}/>
                        })
                    }
                </div>
            </div>
        })}
    </div>
};

export default PrimaryMenuPanel;
