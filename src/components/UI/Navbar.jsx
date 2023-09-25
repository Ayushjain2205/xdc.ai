import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-[56px]">
      <div className="flex-1">
        <span className="text-[32px] font-bold text-primary">TRON.ai</span>
      </div>
      <div className="flex flex-row gap-[24px]">
        <button className="btn btn-primary rounded-none bg-primary h-[48px] w-[192px] font-bold text-white">
          Connect wallet
        </button>
        <div className="flex flex-row items-center justify-center rounded-full bg-primary h-[48px] w-[48px]">
          <img src="/icons/dude.svg" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
