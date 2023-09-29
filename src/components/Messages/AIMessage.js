import React, { useState, useContext } from "react";
import { ModeContext } from "../../contexts/ModeContext";

const AIMessage = ({ message }) => {
  const { mode } = useContext(ModeContext);
  const backgroundColor = mode === "dev" ? "#1F1416" : "#fff";

  return (
    <div className=" pb-[48px] mb-[48px] border-b border-[#E7E9EB]">
      <div className="flex flex-row items-start gap-[16px]">
        <div
          className="flex flex-col items-center justify-center h-[36px] w-[36px] rounded-full"
          style={{ backgroundColor: backgroundColor }}
        >
          <img src="/icons/tron.svg" className="h-[16px]" alt="AI" />
        </div>

        <p className="text-[16px]">{message}</p>
      </div>
      <div className="flex flex-col gap-[8px] mt-[30px]">
        <p className="text-[16px] opacity-40">Resources:</p>
        <div className="flex flex-row gap-[10px]">
          <div className="flex flex-row items-center h-[32px] gap-[7px] px-[18px] rounded-[10px] border border-[#7A7A7A] text-[#7A7A7A]">
            name of resource <img src="/icons/link.svg" alt="" />
          </div>
          <div className="flex flex-row items-center h-[32px] gap-[7px] px-[18px] rounded-[10px] border border-[#7A7A7A] text-[#7A7A7A]">
            name of resource <img src="/icons/link.svg" alt="" />
          </div>
          <div className="flex flex-row items-center h-[32px] gap-[7px] px-[18px] rounded-[10px] border border-[#7A7A7A] text-[#7A7A7A]">
            name of resource <img src="/icons/link.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[8px] mt-[16px]">
        <p className="text-[16px] opacity-40">Related prompts:</p>
        <div className="flex flex-row gap-[10px]">
          <div className="flex flex-row items-center h-[24px] gap-[7px] px-[8px] rounded-[4px] bg-white text-[#7A7A7A] text-[14px]">
            How do I deploy a NFT contract?
          </div>
          <div className="flex flex-row items-center h-[24px] gap-[7px] px-[8px] rounded-[4px] bg-white text-[#7A7A7A] text-[14px]">
            How do I debug a contract?
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMessage;
