import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-[56px]">
      <div className="flex-1">
        <span className="text-[32px] font-bold">TRON.ai</span>
      </div>
      <div className="flex flex-row gap-[24px]">
        <button>Connect wallet</button>
        <span>avatar</span>
      </div>
    </nav>
  );
};

export default Navbar;
