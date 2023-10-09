import React from "react";
import ConnectWallet from "../Functional/ConnectWallet";
import Realtime from "../Functional/Realtime";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-[56px]">
      <div className="flex-1">
        <span className="text-[32px] font-bold text-primary">XDC.ai</span>
      </div>
      <div className="flex flex-row gap-[24px]">
        <Realtime />
        <ConnectWallet />
      </div>
    </nav>
  );
};

export default Navbar;
