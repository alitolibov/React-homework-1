import React from 'react';

function App() {
    return (
        <>
            <div className="bg w-full h-[260px] relative">
            <div className="w-[1150px] pt-[25px] flex items-center gap-[40px] m-auto">
                <div className="flex items-center cursor-pointer">
                    <div className="beans bg-contain w-[35px] h-[35px]"></div>
                    <p className="font-['Merienda'] text-[#fff] text-[12px]">Coffee house</p>
                </div>
                <p className="font-['Merienda'] text-[#fff] cursor-pointer text-[12px]">Our coffee</p>
                <p className="font-['Merienda'] text-[#fff] cursor-pointer text-[12px]">For your pleasure</p>
            </div>
            <p className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] font-['Merienda'] text-[40px] font-bold text-[#fff]">Our Coffee</p>
            </div>
        </>
    );
}

export default App;
