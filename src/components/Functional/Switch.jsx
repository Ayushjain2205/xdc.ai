import React, { useState, useContext } from "react";
import { ModeContext } from "../../contexts/ModeContext";

function Switch() {
  const { mode, setMode } = useContext(ModeContext);
  const checked = mode === "dev"; // true if mode is dev, false if normal

  const handleToggle = () => {
    if (mode === "normal") {
      setMode("dev");
    } else {
      setMode("normal");
    }
  };

  return (
    <label htmlFor="toggle" className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          id="toggle"
          className="sr-only"
          checked={checked}
          onChange={handleToggle}
        />
        <div className="w-[81px] h-[40px] bg-primary rounded-full shadow-inner"></div>
        <div
          className={`flex flex-column justify-center items-center absolute inset-y-[4px] left-[4px] w-[33px] h-[33px] rounded-full shadow transition-transform duration-300 transform ${
            checked
              ? "translate-x-[40px] bg-[#ffffff]"
              : "translate-x-0 bg-[#ffffff]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M17 17.5L23 11.5L17 5.5"
              stroke={checked ? "#000" : "#D34D3E"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 5.5L1 11.5L7 17.5"
              stroke={checked ? "#000" : "#D34D3E"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.5 5L9.5 18"
              stroke={checked ? "#000" : "#D34D3E"}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </label>
  );
}

export default Switch;
