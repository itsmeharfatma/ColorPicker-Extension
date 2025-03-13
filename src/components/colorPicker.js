import { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#d1d1d1");
  const [rgbColor, setRgbColor] = useState("rgb(209, 209, 209)");
  const [useRGB, setUseRGB] = useState(false);

  const hexToRgb = (hex) => {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const openEyeDropper = async () => {
    let eyeDropper = new window.EyeDropper();
    const { sRGBHex } = await eyeDropper.open();
    setColor(sRGBHex);
    setRgbColor(hexToRgb(sRGBHex));
  };

  const handleCopyColor = async () => {
    const colorValue = useRGB ? rgbColor : color;
    await navigator.clipboard.writeText(colorValue);
    alert(`Copied ${colorValue} to clipboard!`);
  };

  return (
    <div className="flex flex-col space-y-4 border border-gray-200 rounded-lg shadow-sm justify-center p-4 my-3 mx-4">
      <div
        className="w-[220px] h-28 rounded-md mx-auto"
        style={{ background: color }}
      ></div>

      <div className="flex justify-center mt-2">
        <div className="flex w-full bg-slate-100 rounded-lg shadow overflow-hidden p-1">
          <button
            className={`px-4 py-1 rounded-md w-full text-xs font-medium transition ${
              !useRGB ? "bg-white shadow text-gray-900" : "text-gray-500"
            }`}
            onClick={() => setUseRGB(false)}
          >
            HEX
          </button>
          <button
            className={`px-4 py-1 rounded-md w-full text-xs font-medium transition ${
              useRGB ? "bg-white shadow text-gray-900" : "text-gray-500"
            }`}
            onClick={() => setUseRGB(true)}
          >
            RGB
          </button>
        </div>
      </div>

      <div
        className="flex items-center justify-center w-full text-sm text-[#1f2937] shadow space-x-2 bg-slate-100 cursor-pointer rounded-md py-1 px-2 hover:shadow-md"
        onClick={handleCopyColor}
        title="Copy"
      >
        <i className="fa-solid fa-copy" style={{ color: "#515357" }}></i>
        <div>{useRGB ? rgbColor : color}</div>
      </div>

      <div
        className="flex items-center justify-center w-full text-sm text-[#1f2937] shadow space-x-2 bg-slate-100 cursor-pointer rounded-md py-1 px-2 hover:shadow-md"
        onClick={openEyeDropper}
      >
        <i className="fa-solid fa-eye-dropper" style={{ color: "#515357" }}></i>
        <p>Pick Me!</p>
      </div>
    </div>
  );
};

export default ColorPicker;
