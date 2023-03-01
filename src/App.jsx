import React from 'react';

function App() {
    return (
        <> < div className = "back w-full h-[260px] relative" > <div className="w-[1150px] pt-[25px] flex items-center gap-[40px] m-auto">
            <div className="flex items-center cursor-pointer">
                <div className="beans bg-contain w-[35px] h-[35px]"></div>
                <p className="font-['Merienda'] text-[#fff] text-[12px]">Coffee house</p>
            </div>
            <p className="font-['Merienda'] text-[#fff] cursor-pointer text-[12px]">Our coffee</p>
            <p className="font-['Merienda'] text-[#fff] cursor-pointer text-[12px]">For your pleasure</p>
        </div>
        <p
            className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] font-['Merienda'] text-[40px] font-bold text-[#fff]">Our Coffee</p>
    </div>
    <div className="w-[1150px] m-auto my-[70px]">
        <div className="flex items-center gap-[79px] m-auto w-fit">
            <div className="drink w-[272px] h-[355px]"></div>
            <div className="flex flex-col gap-[23px]">
                <p className="font-['Merienda'] text-[24px] text-center">About our beans</p>
                <div className="coffeeLine w-[200px] h-[29.3px] m-auto"></div>
                <p className="text-center font-['Merienda'] text-[14px] w-[350px]">Extremity sweetness difficult behaviour he of. On <br/> disposal of as
                    landlord horrible.<br/>
                    <br/>
                     Afraid at highly months do things on at. Situation <br/> recommend
                    objection do intention<br/> so questions.<br/> As greatly removed calling pleased improve
                    an.<br/> Last ask him cold feel <br/>met spot shy want. Children me laughing we<br/> prospect
                    answered followed. At it went<br/> is song that held help face.</p>
            </div>
        </div>
    </div>
</>
    );
}

export default App;
