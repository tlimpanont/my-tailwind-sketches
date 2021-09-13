import React, {FC} from 'react';

const MixAndBgBlendPage: FC<unknown> = () => (
    <div
        className="flex justify-center items-center flex-col h-screen w-screen bg-cover bg-bottom bg-yellow-300 bg-blend-multiply"
        style={{
            backgroundImage:
                'url("computer-desk-laptop.jpeg")'
        }}
    >
        <h1 className="italic selection:bg-black text-transparent bg-clip-text bg-white mix-blend-overlay xl:mix-blend-lighten text-center text-9xl font-extrabold">
            select this text
        </h1>
        <div className={"absolute bottom-10 right-10"}>
            <p className={"italic text-2xl"}>"Make the text invisible by selecting the text (double click to select)"</p>
        </div>
    </div>
)
export default MixAndBgBlendPage;
