import React from 'react';

function Children(props) {
   console.log(props);
    return (
        <div
            className="h-[260px] flex-col gap-[14px] items-end px-[26px] pt-[37px] flex shadow-lg shadow-[rgba(0, 0, 0, 0.25)]">
            <div className="coffee w-[167px] h-[115px]"></div>
            <p className="font-['Merienda'] text-[14px]">AROMISTICO Coffee 1 kg</p>
            <p className="font-['Merienda'] text-[14px]">{props.item}</p>
            <p className="font-['Merienda'] text-[14px] font-bold">6.99$</p>
        </div>
    )
}

export default Children;