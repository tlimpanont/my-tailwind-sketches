import React, {FC} from "react";
import { v4 as uuidv4 } from 'uuid';
export type PrimaryMenuItemProps = {
    icon: JSX.Element,
    title: string
    description: string,
    callToActions?: {
        text: string
        linkTo: string
    }[]
}
const PrimaryMenuItem: FC<PrimaryMenuItemProps> = (
    {
        icon,
        title,
        callToActions,
        description
    },
) => {
    return (
        <div className="flex flex-row gap-4">
            <div className={'text-blue-500'}>
                {icon}
            </div>
            <div className={"flex flex-col gap-y-1"}>
                <h6 className={"font-semibold"}>{title}</h6>
                <p className={"text-sm"}>{description}</p>
                <div className="flex flex-row gap-x-4">
                    {callToActions?.length  && callToActions.map(({text, linkTo}) => {
                        return <div className={"flex flex-row items-center gap-x-1"} key={uuidv4()}>
                            <a className={"text-blue-500 underline text-sm"} href={linkTo}>{text}</a>
                            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default PrimaryMenuItem;
