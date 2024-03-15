import { useState } from "react";

const ColorPicker = () => {
    const [color, setColor] = useState("#d1d1d1");

    const openEyeDropper = async () => {
        let eyeDropper = new window.EyeDropper();
        const { sRGBHex } = await eyeDropper.open();
        setColor(sRGBHex);
    };

    const handleCopyColor = async () => {
        await navigator.clipboard.writeText(color);
        alert(`Copied ${color} to clipboard!`);
    };

    return (
        <div className='flex flex-col space-y-4 border border-gray-200 rounded-lg shadow-sm justify-center px-4 py-6 mt-11 mb-12 mx-4'>
            <div className='w-[220px] h-28 rounded-md mx-auto' style={{ background: color }} ></div>

            <div className="flex justify-between items-center">
                <div className='flex items-center justify-center w-[104px] text-[#1f2937] shadow space-x-2 bg-slate-100 cursor-pointer rounded-md py-1 px-1 hover:bg-slate-100 hover:shadow-md' onClick={openEyeDropper} >
                    <i class="fa-solid fa-eye-dropper" style={{ color: "#515357" }}></i>
                    <p>Pick Me!</p>
                </div>

                <div className="flex items-center justify-center w-[104px] text-[#1f2937] shadow space-x-2 bg-slate-100 cursor-pointer rounded-md py-1 px-2 hover:bg-slate-100 hover:shadow-md" onClick={handleCopyColor} >
                    <i class="fa-solid fa-copy" style={{ color: "#515357" }}></i>
                    <div>{color}</div>
                </div>
            </div>
        </div>
    );
};

export default ColorPicker;