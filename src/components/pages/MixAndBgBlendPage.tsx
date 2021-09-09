import React, {FC} from 'react';

const MixAndBgBlendPage: FC<unknown> = () => (
    <div
        className="flex justify-center items-center flex-col h-screen w-screen bg-cover bg-bottom bg-yellow-300 bg-blend-multiply"
        style={{
            backgroundImage:
                'url("https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80")'
        }}
    >
        <h1 className="italic selection:bg-black text-transparent bg-clip-text bg-white mix-blend-overlay xl:mix-blend-lighten text-center text-9xl font-extrabold">
            select this text
        </h1>
    </div>
)
export default MixAndBgBlendPage;
