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
        <div className='flex flex-col space-y-2'>
            <div className='flex items-center justify-start w-28 mx-auto text-[#1f2937] space-x-1' onClick={openEyeDropper}>
                <i class="fa-solid fa-eye-dropper" style={{ color: "#9ca3af" }}></i>
                <p>Pick Me!</p>
            </div>

            <div className='w-28 h-16 rounded-md mx-auto' style={{ background: color }} onClick={handleCopyColor} >
                {/* <span>{color}</span> */}
            </div>

            <div className="flex items-center justify-start w-28 mx-auto text-[#1f2937] space-x-1">
                <i class="fa-solid fa-copy" style={{ color: "#9ca3af" }}></i>
                <div>{color}</div>
            </div>
        </div>
    );
};

export default ColorPicker;