import React, {FC, HTMLProps} from 'react';
import PrimaryMenu, {PrimaryMenuProps} from "./PrimaryMenu";

const PrimaryNavbar: FC<HTMLProps<HTMLDivElement> & {primaryMenu: PrimaryMenuProps}> = ({primaryMenu}) => {
    return (
        <div className={'flex flex-row justify-evenly items-center py-4 border-b-2 border-gray-200'}>
            <img src="https://www.twilio.com/docs/static/dist/img/559bc7cf.svg" alt="twiliologo"
                 className={"w-24 sm:w-32"}/>
            <PrimaryMenu {...primaryMenu} className={'hidden lg:flex'}/>
            <div className={"space-x-2"}>
                <button className={"hidden lg:inline py-2 px-4 border-2 border-blue-600 rounded-lg"}>Talk to an expert
                </button>
                <button className={"py-2 px-4 border-2 border-blue-600  rounded-lg bg-blue-600 text-white"}>Sign up
                </button>
                <button className={"lg:hidden py-2 px-4 border-2 border-blue-600  rounded-lg text-blue-600"}>Menu
                </button>
            </div>
        </div>
    );
};

export default PrimaryNavbar;
