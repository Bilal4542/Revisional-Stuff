import { useEffect, useRef, useState } from "react";
import JsBarcode from "jsbarcode";

export default function BarcodeGenerator() {
  const barcodeRef = useRef(null);

  // =========================
  // STATE
  // =========================
  const [value, setValue] = useState("1234567890");
  const [format, setFormat] = useState("CODE128");
  const [width, setWidth] = useState(2);
  const [height, setHeight] = useState(100);
  const [margin, setMargin] = useState(10);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [lineColor, setLineColor] = useState("#000000");
  const [showText, setShowText] = useState(true);
  const [textAlign, setTextAlign] = useState("center");
  const [textMargin, setTextMargin] = useState(2);
  const [error, setError] = useState("");


  // =========================
  // GENERATE BARCODE
  // =========================
  useEffect(() => {
  const validationError = validateBarcode(value, format);
  setError(validationError);

  if (format === "EAN13" && /^\d{12}$/.test(value)) {
  const checksum = calculateEAN13Checksum(value);
  setValue(value + checksum);
  return;
}


  if (validationError) return;

  try {
    JsBarcode(barcodeRef.current, value, {
      format,
      width,
      height,
      margin,
      background: bgColor,
      lineColor,
      displayValue: showText,
      textAlign,
      textMargin,
    });
  } catch (err) {
    setError("Invalid barcode configuration");
  }
}, [
  value,
  format,
  width,
  height,
  margin,
  bgColor,
  lineColor,
  showText,
  textAlign,
  textMargin,
]);

const validateBarcode = (value, format) => {
  if (!value) return "Barcode value cannot be empty";

  if (format === "EAN13" && !/^\d{13}$/.test(value)) {
    return "EAN-13 requires exactly 13 digits";
  }

  if (format === "UPC" && !/^\d{12}$/.test(value)) {
    return "UPC requires exactly 12 digits";
  }

  return "";
};
const calculateEAN13Checksum = (digits) => {
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += parseInt(digits[i]) * (i % 2 === 0 ? 1 : 3);
  }
  return (10 - (sum % 10)) % 10;
};



  // =========================
  // DOWNLOAD BARCODE
  // =========================
  const downloadBarcode = () => {
    const svg = barcodeRef.current;
    const serializer = new XMLSerializer();
    const svgStr = serializer.serializeToString(svg);

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    const svgBlob = new Blob([svgStr], {
      type: "image/svg+xml;charset=utf-8",
    });

    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);

      const png = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "barcode.png";
      link.href = png;
      link.click();
    };

    img.src = url;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* LEFT CONTROLS */}
        <div className="bg-white rounded-xl shadow p-6 space-y-6">
          <h2 className="text-xl font-semibold">Barcode Settings</h2>

          {/* Barcode Data */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Barcode Data
            </label>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full rounded-lg border px-3 py-2"
            />
          </div>

          {/* Barcode Type */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Barcode Type
            </label>
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className="w-full rounded-lg border px-3 py-2"
            >
              <option value="CODE128">CODE128</option>
              <option value="EAN13">EAN13</option>
              <option value="UPC">UPC</option>
              <option value="CODE39">CODE39</option>
            </select>
          </div>

          {/* Sliders */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <Slider
    label="Bar Width"
    value={width}
    setValue={setWidth}
    min={1}
    max={5}
    unit="px"
  />
  <Slider
    label="Height"
    value={height}
    setValue={setHeight}
    min={50}
    max={200}
    unit="px"
  />
  <Slider
    label="Margin"
    value={margin}
    setValue={setMargin}
    min={0}
    max={30}
    unit="px"
  />
</div>


          {/* Colors */}
          <div className="grid grid-cols-2 gap-4">
            <ColorInput label="Background Color" value={bgColor} setValue={setBgColor} />
            <ColorInput label="Line Color" value={lineColor} setValue={setLineColor} />
          </div>

          {/* Show Text */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Show Text</span>
            <input
              type="checkbox"
              checked={showText}
              onChange={() => setShowText(!showText)}
              className="h-5 w-5"
            />
          </div>

          {/* Text Alignment */}
          <div>
            <p className="text-sm font-medium mb-2">Text Alignment</p>
            <div className="flex gap-2">
              {["left", "center", "right"].map((align) => (
                <button
                  key={align}
                  onClick={() => setTextAlign(align)}
                  className={`flex-1 py-2 rounded-lg border ${
                    textAlign === align
                      ? "bg-black text-white"
                      : "bg-white"
                  }`}
                >
                  {align}
                </button>
              ))}
            </div>
          </div>

          {/* Text Margin */}
          <Slider
            label="Text Margin"
            value={textMargin}
            setValue={setTextMargin}
            min={0}
            max={20}
          />
        </div>

        {/* RIGHT PREVIEW */}
        {/* ERROR MESSAGE */}
{error && (
  <div className="mb-4 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
    ⚠️ {error}
  </div>
)}

{/* PREVIEW ONLY WHEN NO ERROR */}
{!error && (
  <div className="bg-white rounded-xl shadow p-6 flex flex-col">
    <div className="flex justify-center items-center min-h-[300px]">
      <svg ref={barcodeRef}></svg>
    </div>

    <button
      onClick={downloadBarcode}
      className="mt-6 w-full py-3 rounded-lg bg-gradient-to-r from-black to-gray-800 text-white flex items-center justify-center gap-2 cursor-pointer"
    >
      Download
    </button>
  </div>
)}

      </div>
    </div>
  );
}

/* =========================
   REUSABLE COMPONENTS
========================= */

function Slider({ label, value, setValue, min, max, unit }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium">{label}</span>
        <span className="text-gray-500">
          ({value}{unit})
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full accent-black"
      />
    </div>
  );
}


function ColorInput({ label, value, setValue }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type="color"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-10 rounded-lg border"
      />
    </div>
  );
}
