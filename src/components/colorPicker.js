import { useState } from "react";

const ColorPicker = () => {
    const [color, setColor] = useState("#5524e7");
    // const [image, setImage] = useState(null);

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
        <div className=''>
            <div className=''>
                <div className=''>

                    <button className='' onClick={openEyeDropper}>
                        Click Me!
                    </button>
                </div>

                <div className=''>
                    <p>View selected</p>
                    <button
                        className=''
                        style={{ background: color }}
                        onClick={handleCopyColor}
                    >
                        <span>{color}</span>
                    </button>
                </div>

                <span className=''>
                    Made with ❤️ by{" "}
                    <a href="https://github.com/itsmeharfatma" target="_blank">
                        {/* @tomisloading */}
                        Mehar Fatma
                    </a>
                </span>
            </div>
        </div>
    );
};

export default ColorPicker;